'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { styles } from '../ui/styles';
import { cn } from '../utils/cn';
import { ModalPropsType, ModalRefType } from '../utils/types';

export const Modal = forwardRef<ModalRefType, ModalPropsType>(
  ({ visible = false, title = '', children }, ref) => {
    const [modalVisible, setModalVisible] = useState(visible);

    useEffect(() => {
      if (!modalVisible) return;
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }, [modalVisible]);

    useImperativeHandle(ref, () => ({
      show: () => setModalVisible(true),
      hide: () => setModalVisible(false),
    }));

    if (!modalVisible) return null;

    return (
      <div className="w-full h-full fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 flex flex-col justify-center items-center">
        <div
          className={cn(
            styles.styledCard,
            'm-6 min-w-[300px] min-h-[300px] flex flex-col',
          )}
        >
          <XMarkIcon
            className="size-10 self-end cursor-pointer"
            onClick={() => setModalVisible(false)}
          />
          <p className="text-2xl text-center">{title}</p>
          <div className="pt-6">{children}</div>
        </div>
      </div>
    );
  },
);

Modal.displayName = 'Modal';
