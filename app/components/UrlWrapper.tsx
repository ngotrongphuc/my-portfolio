import Link from 'next/link';
import { DeviceTypes, UrlType } from '../utils/types';
import Modal from './Modal';
import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import ElevatedButton from './ElevatedButton';

const UrlWrapper = ({ children }: { children: UrlType }) => {
  const { android, ios, web }: [keyof UrlType] | any = children;
  const modalRef = useRef<any>(null);
  const [currentDeviceType, setCurrentDeviceType] =
    useState<null | DeviceTypes>(null);
  const modalTitle = useMemo(
    () => `Expo Go QR code for ${currentDeviceType}`,
    [currentDeviceType],
  );

  const ModalBody = () => {
    return (
      <div className="text-lg leading-10">
        <p>{`Scan the following QR code with an ${currentDeviceType} device to open it in Expo Go or a development build.`}</p>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={`/qr-codes/${currentDeviceType === DeviceTypes.android ? android.qr : ios.qr}`}
            alt={
              currentDeviceType === DeviceTypes.android ? android.url : ios.url
            }
            width={200}
            height={200}
            className="my-6"
          />
          <p>Or, open this link on your device:</p>
          <Link
            href={
              currentDeviceType === DeviceTypes.android ? android.url : ios.url
            }
            target="_blank"
            className="underline text-slate-400 break-all"
          >
            {currentDeviceType === DeviceTypes.android ? android.url : ios.url}
          </Link>
          <ElevatedButton className="pt-6" onClick={modalRef.current?.close}>
            Close
          </ElevatedButton>
        </div>
      </div>
    );
  };

  const openModal = (currentUrlType: DeviceTypes) => {
    setCurrentDeviceType(currentUrlType);
    modalRef.current?.open();
  };

  if (typeof children === 'string') {
    return (
      <Link
        href={children}
        target="_blank"
        className="underline text-blue-500 break-all"
      >
        Website
      </Link>
    );
  }

  if (web) {
    return (
      <Link
        href={web.url}
        target="_blank"
        className="underline text-blue-500 break-all"
      >
        Website
      </Link>
    );
  }

  return (
    <div>
      <Modal ref={modalRef} title={modalTitle} body={<ModalBody />} />
      <div className="divide-x-2">
        {children?.android && (
          <span
            className="text-blue-500 cursor-pointer px-2 first:pl-0"
            onClick={() => openModal(DeviceTypes.android)}
          >
            Android
          </span>
        )}
        {children?.ios && (
          <span
            className="text-blue-500 cursor-pointer px-2 first:pl-0"
            onClick={() => openModal(DeviceTypes.ios)}
          >
            IOS
          </span>
        )}
      </div>
    </div>
  );
};

export default UrlWrapper;
