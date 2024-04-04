import Link from 'next/link';
import { DeviceTypes, ModalRefType, UrlType } from '../utils/types';
import Modal from './Modal';
import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import ElevatedButton from './ElevatedButton';

const UrlWrapper = ({ children }: { children: UrlType }) => {
  const { android, ios, androidAndIos, web }: [keyof UrlType] | any = children;
  const modalRef = useRef<ModalRefType>(null);
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
            src={
              currentDeviceType === DeviceTypes.android
                ? android.qrUrl
                : currentDeviceType === DeviceTypes.ios
                  ? ios.qrUrl
                  : androidAndIos.qrUrl
            }
            alt="Expo Go QR Code"
            width={200}
            height={200}
            className="my-6"
          />
          <p>Or, open this link on your device:</p>
          <Link
            href={
              currentDeviceType === DeviceTypes.android
                ? android.url
                : currentDeviceType === DeviceTypes.ios
                  ? ios.url
                  : androidAndIos.url
            }
            target="_blank"
            className="underline text-slate-400 break-all"
          >
            <p className="line-clamp-1">
              {currentDeviceType === DeviceTypes.android
                ? android.url
                : currentDeviceType === DeviceTypes.ios
                  ? ios.url
                  : androidAndIos.url}
            </p>
          </Link>
          <ElevatedButton className="pt-6" onClick={modalRef.current?.hide}>
            Close
          </ElevatedButton>
        </div>
      </div>
    );
  };

  const showModal = (currentUrlType: DeviceTypes) => {
    setCurrentDeviceType(currentUrlType);
    modalRef.current?.show();
  };

  return (
    <div>
      <Modal ref={modalRef} title={modalTitle}>
        <ModalBody />
      </Modal>
      <div className="divide-x-2">
        {(typeof children === 'string' || web) && (
          <Link
            href={typeof children === 'string' ? children : web}
            target="_blank"
            className="underline text-blue-500 px-2 first:pl-0"
          >
            Website
          </Link>
        )}
        {android && (
          <span
            className="underline text-blue-500 cursor-pointer px-2 first:pl-0"
            onClick={() => showModal(DeviceTypes.android)}
          >
            Android
          </span>
        )}
        {ios && (
          <span
            className="underline text-blue-500 cursor-pointer px-2 first:pl-0"
            onClick={() => showModal(DeviceTypes.ios)}
          >
            IOS
          </span>
        )}
        {androidAndIos && (
          <span
            className="underline text-blue-500 cursor-pointer px-2 first:pl-0"
            onClick={() => showModal(DeviceTypes.androidAndIos)}
          >
            {DeviceTypes.androidAndIos}
          </span>
        )}
      </div>
    </div>
  );
};

export default UrlWrapper;
