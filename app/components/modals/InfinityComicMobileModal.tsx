import { Url } from '@/app/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import ElevatedButton from '../ElevatedButton';

const InfinityComicMobileModal = (props: Url) => {
  return (
    <div className="flex flex-col items-center justify-center leading-8">
      <p>{`Download Expo Go on App Store or Google Play, then scan the QR code below`}</p>
      <Image
        src={props.qrUrl as string}
        alt={props.url}
        width={200}
        height={200}
        className="my-6 w-[100px] xs:w-[150px] sm:w-[200px] h-[100px] xs:h-[150px] sm:h-[200px]"
      />
      <div className="flex items-center mb-2">
        <p className="mr-4">Or, download the apk:</p>
        <Link href={props.apkUrl as string} target="_blank">
          <Image
            src="/apk-icon.png"
            alt="apk icon"
            width={50}
            height={50}
            className="w-[30px] xs:w-[40px] sm:w-[50px] h-[30px] xs:h-[40px] sm:h-[50px]"
          />
        </Link>
      </div>
      <p className="text-left">
        Test account:{' '}
        <span className="text-gray-400">
          user1@gmail.com, user2@gmail.com, user3@gmail.com
        </span>
        <br />
        Password: <span className="text-gray-400">123456</span>
        <br />
        Or you can register a new account
      </p>
      <ElevatedButton className="mt-6" onClick={props.modalRef.current?.hide}>
        Close
      </ElevatedButton>
    </div>
  );
};

export default InfinityComicMobileModal;
