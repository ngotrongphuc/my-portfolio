'use client';
import SectionWrapper from '@/app/hoc/SectionWrapper';
import styles from '@/app/ui/styles';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ElevatedButton from '../ElevatedButton';
import EarthCanvas from '../canvas/EarthCanvas';
import SpaceCanvas from '../canvas/SpaceCanvas';
import { contact } from '@/app/utils/constants';
import {
  emailPattern,
  phoneNumberPattern,
  regexToString,
} from '@/app/utils/regexPatterns';
import Popup from '../Popup';
import { PopupRefType } from '@/app/utils/types';

const Contact = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const popupRef = useRef<PopupRefType>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: contact.myName,
          from_email: form.email,
          to_email: contact.myEmail,
          from_phone_number: form.phoneNumber,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          popupRef.current?.showSuccess(
            'Sent successfully!',
            'I will get back to you as soon as possible.',
            5000,
          );

          setForm({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          popupRef.current?.showFailure(
            'Sending failed!',
            'Something went wrong, please try again.',
            5000,
          );
        },
      );
  };

  return (
    <section className="absolute inset-x-0 z-0">
      <SpaceCanvas className="absolute inset-0 z-[-1] bg-gray-950" />
      <Popup ref={popupRef} />
      <div className={`${styles.sectionWrapper} flex flex-col`}>
        <h1 className={`${styles.sectionHeadText} mb-10`}>CONTACT</h1>

        <div className="flex justify-between flex-col-reverse sm:flex-row">
          <form
            className={`${styles.styledCard} flex flex-1 flex-col gap-6`}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                required
                pattern={regexToString(emailPattern)}
                title="Please enter a valid e-mail address."
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your phone number</span>
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="What's your phone number?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                pattern={regexToString(phoneNumberPattern)}
                title="Please provide a valid phone number."
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-3">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="text-black py-4 px-6 rounded-lg font-medium"
                required
              />
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
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');
