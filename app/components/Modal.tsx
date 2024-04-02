import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import styles from '../ui/styles';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Modal = forwardRef(({ title, body }:any, ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    visible && (
      <div className="w-full h-full fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 flex flex-col justify-center items-center">
        <div className={`${styles.styledCard} m-6 min-w-[300px] min-h-[300px] max-w-[1000px] max-h-[1000px] flex flex-col`}>
          <XMarkIcon
            className="size-10 self-end cursor-pointer"
            onClick={close}
          />
          <p className="text-2xl text-center">{title}</p>
          <div className='pt-6'>{body}</div>
        </div>
      </div>
    )
  );
});

Modal.displayName = 'Modal';
export default Modal;
