'use client';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { styles } from '../ui/styles';
import { cn } from '../utils/cn';
import { PopupPropsType, PopupRefType } from '../utils/types';

export const Popup = forwardRef<PopupRefType, PopupPropsType>(
  ({ type = 'success', title = '', content = '', visible = false }, ref) => {
    // Props act as initial values only. The imperative ref API is the
    // sole source of truth after mount.
    const [popupType, setPopupType] = useState<PopupPropsType['type']>(type);
    const [popupTitle, setPopupTitle] =
      useState<PopupPropsType['title']>(title);
    const [popupContent, setPopupContent] =
      useState<PopupPropsType['content']>(content);
    const [popupVisible, setPopupVisible] =
      useState<PopupPropsType['visible']>(visible);

    useImperativeHandle(ref, () => {
      const showFor = (duration?: number) => {
        setPopupVisible(true);
        if (!duration) return;
        const timer = setTimeout(() => setPopupVisible(false), duration);
        return () => clearTimeout(timer);
      };

      return {
        show: (duration?: number) => {
          showFor(duration);
        },
        hide: () => setPopupVisible(false),
        showSuccess: (
          nextTitle: string,
          nextContent: string,
          duration?: number,
        ) => {
          setPopupType('success');
          setPopupTitle(nextTitle);
          setPopupContent(nextContent);
          showFor(duration);
        },
        showFailure: (
          nextTitle: string,
          nextContent: string,
          duration?: number,
        ) => {
          setPopupType('failure');
          setPopupTitle(nextTitle);
          setPopupContent(nextContent);
          showFor(duration);
        },
      };
    });

    if (!popupVisible) return null;

    return (
      <div
        className={cn(
          styles.styledCard,
          'fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 text-center flex flex-col justify-center items-center shadow-sm shadow-white',
        )}
      >
        <h3 className="text-2xl mb-3">{popupTitle}</h3>
        <p className="text-xl mb-6">{popupContent}</p>
        {popupType === 'success' ? (
          <CheckCircleIcon className="text-green-500 size-16" />
        ) : (
          <XCircleIcon className="text-red-500 size-16" />
        )}
      </div>
    );
  },
);

Popup.displayName = 'Popup';
