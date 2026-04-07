'use client';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { styles } from '../../ui/styles';
import { cn } from '../../utils/cn';
import {
  emailPattern,
  phoneNumberPattern,
  regexToString,
} from '../../utils/regexPatterns';
import {
  EMAIL_MAX,
  MESSAGE_MAX,
  MESSAGE_MIN,
  NAME_MAX,
  NAME_MIN,
  validateContactForm,
  type ContactFormErrors,
} from '../../utils/validateContactForm';
import { PopupRefType } from '../../utils/types';
import { ElevatedButton } from '../ElevatedButton';
import { Popup } from '../Popup';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const RECAPTCHA_ACTION = 'contact';

/**
 * Request a reCAPTCHA v3 token for the contact action. Returns `null` if
 * reCAPTCHA is not configured (dev mode without keys) or if the grecaptcha
 * script hasn't loaded yet — the caller should decide whether to proceed.
 */
const getRecaptchaToken = async (): Promise<string | null> => {
  if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined') return null;
  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) return null;
  await new Promise<void>((resolve) => grecaptcha.ready(resolve));
  return grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION });
};

const EarthCanvas = dynamic(
  () => import('../canvas/EarthCanvas').then((mod) => mod.EarthCanvas),
  {
    ssr: false,
    loading: () => <div className="size-40 sm:size-60 lg:size-80" />,
  },
);

const SpaceCanvas = dynamic(
  () => import('../canvas/SpaceCanvas').then((mod) => mod.SpaceCanvas),
  { ssr: false },
);

type ContactForm = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  /** Honeypot — invisible, real users never fill this. */
  website: string;
};

const emptyForm: ContactForm = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
  website: '',
};

export const Contact = () => {
  const popupRef = useRef<PopupRefType>(null);
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [loading, setLoading] = useState(false);

  // Reveal the reCAPTCHA badge only while the Contact section is visible.
  useEffect(() => {
    const section = document.getElementById('contact');
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle('contact-in-view', entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      document.body.classList.remove('contact-in-view');
    };
  }, []);

  const updateField = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field's error as soon as the user edits it.
    setErrors((prev) => {
      if (!prev[name as keyof ContactFormErrors]) return prev;
      const next = { ...prev };
      delete next[name as keyof ContactFormErrors];
      return next;
    });
  };

  const submitForm = async () => {
    const result = validateContactForm(form);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...result.data,
          website: form.website,
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      popupRef.current?.showSuccess(
        'Sent successfully!',
        'I will get back to you as soon as possible.',
        5000,
      );
      setForm(emptyForm);
    } catch (error) {
      console.error(error);
      popupRef.current?.showFailure(
        'Sending failed!',
        'Something went wrong, please try again.',
        5000,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SpaceContactWrapper>
      <div className={cn(styles.sectionWrapper, 'flex flex-col')}>
        <h1 className={cn(styles.sectionHeadText, 'mb-10')}>CONTACT</h1>
        <div className="flex justify-between flex-col-reverse sm:flex-row">
          <form
            className={cn(styles.styledCard, 'flex flex-1 flex-col gap-6')}
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            {/* Honeypot — hidden from real users, bots will fill it in. */}
            <div
              className="absolute -left-[9999px] top-auto size-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => updateField('website', e.target.value)}
              />
            </div>
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => updateField(e.target.name, e.target.value)}
                placeholder="What's your name?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                required
                minLength={NAME_MIN}
                maxLength={NAME_MAX}
              />
              {errors.name && (
                <span className="text-red-400 text-sm mt-2">{errors.name}</span>
              )}
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => updateField(e.target.name, e.target.value)}
                placeholder="What's your email address?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                required
                maxLength={EMAIL_MAX}
                pattern={regexToString(emailPattern)}
                title="Please enter a valid e-mail address."
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-2">
                  {errors.email}
                </span>
              )}
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your phone number</span>
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={(e) => updateField(e.target.name, e.target.value)}
                placeholder="What's your phone number?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                pattern={regexToString(phoneNumberPattern)}
                title="Please provide a valid phone number."
              />
              {errors.phoneNumber && (
                <span className="text-red-400 text-sm mt-2">
                  {errors.phoneNumber}
                </span>
              )}
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={(e) => updateField(e.target.name, e.target.value)}
                placeholder="What do you want to say?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                required
                minLength={MESSAGE_MIN}
                maxLength={MESSAGE_MAX}
              />
              {errors.message && (
                <span className="text-red-400 text-sm mt-2">
                  {errors.message}
                </span>
              )}
            </label>
            <div className="flex justify-center">
              <ElevatedButton className="mt-3">
                {loading ? 'Sending' : 'Send'}
              </ElevatedButton>
            </div>
          </form>
          <div className="flex flex-1 justify-center sm:justify-end p-6">
            <EarthCanvas className="size-40 sm:size-60 lg:size-80" />
          </div>
        </div>
      </div>
      <Popup ref={popupRef} />
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      )}
    </SpaceContactWrapper>
  );
};

const SpaceContactWrapper = ({ children }: { children: React.ReactNode }) => (
  <section id="contact" className="relative z-0 min-h-screen">
    <SpaceCanvas className="absolute inset-0 z-[-1] bg-gray-950 h-full" />
    {children}
  </section>
);
