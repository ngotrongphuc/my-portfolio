import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import styles from '../ui/styles';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { PopupPropsType, PopupRefType } from '../utils/types';

const Popup = forwardRef<PopupRefType, PopupPropsType>(
  ({ type = 'success', title = '', content = '', visible = false }, ref) => {
    const [popupType, setPopupType] = useState<PopupPropsType['type']>(type);
    const [popupTitle, setPopupTitle] =
      useState<PopupPropsType['title']>(title);
    const [popupContent, setPopupContent] =
      useState<PopupPropsType['content']>(content);
    const [popupVisible, setPopupVisible] =
      useState<PopupPropsType['visible']>(visible);

    useEffect(() => {
      setPopupType(type);
      setPopupTitle(title);
      setPopupContent(content);
      setPopupVisible(visible);
    }, [type, title, content, visible]);

    useImperativeHandle(ref, () => ({
      show(duration?: number): void {
        setPopupVisible(true);
        if (duration) {
          setTimeout(() => {
            setPopupVisible(false);
          }, duration);
        }
      },
      hide(): void {
        setPopupVisible(false);
      },
      showSuccess(title: string, content: string, duration: number): void {
        setPopupType('success');
        setPopupTitle(title);
        setPopupContent(content);
        setPopupVisible(true);
        if (duration) {
          setTimeout(() => {
            setPopupVisible(false);
          }, duration);
        }
      },
      showFailure(title: string, content: string, duration: number): void {
        setPopupType('failure');
        setPopupTitle(title);
        setPopupContent(content);
        setPopupVisible(true);
        if (duration) {
          setTimeout(() => {
            setPopupVisible(false);
          }, duration);
        }
      },
    }));

    return (
      <>
        {popupVisible && (
          <div
            className={`${styles.styledCard} fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 text-center flex flex-col justify-center items-center shadow-sm shadow-white`}
          >
            <h3 className="text-2xl mb-3">{popupTitle}</h3>
            <p className="text-xl mb-6">{popupContent}</p>
            {popupType === 'success' ? (
              <CheckCircleIcon className="text-green-500 size-16" />
            ) : (
              <XCircleIcon className="text-red-500 size-16" />
            )}
          </div>
        )}
      </>
    );
  },
);

Popup.displayName = 'Popup';
export default Popup;
