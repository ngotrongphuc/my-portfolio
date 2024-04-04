import { XMarkIcon } from '@heroicons/react/24/outline';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import styles from '../ui/styles';
import { ModalPropsType, ModalRefType } from '../utils/types';

const Modal = forwardRef<ModalRefType, ModalPropsType>(
  ({ visible = false, title = '', children }, ref) => {
    const [modalVisible, setModalVisible] = useState(visible);

    useEffect(() => {
      if (modalVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [modalVisible]);

    const show = (): void => {
      setModalVisible(true);
    };

    const hide = (): void => {
      setModalVisible(false);
    };

    useImperativeHandle(ref, () => ({
      show,
      hide,
    }));

    return (
      modalVisible && (
        <div className="w-full h-full fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 flex flex-col justify-center items-center">
          <div
            className={`${styles.styledCard} m-6 min-w-[300px] min-h-[300px] max-w-[1000px] max-h-[1000px] flex flex-col`}
          >
            <XMarkIcon
              className="size-10 self-end cursor-pointer"
              onClick={hide}
            />
            <p className="text-2xl text-center">{title}</p>
            <div className="pt-6">{children}</div>
          </div>
        </div>
      )
    );
  },
);

Modal.displayName = 'Modal';
export default Modal;
