import { Url } from '@/app/utils/types';
import Link from 'next/link';
import ElevatedButton from '../ElevatedButton';

const InfinityComicWebModal = (props: Url) => {
  return (
    <div className="flex flex-col items-center justify-center leading-8">
      <p className="text-lg mb-6">{`Please don't test with sensitive data`}</p>
      <p className="text-left">
        Test account: <span className="text-gray-400">admin@gmail.com</span>
        <br />
        Password: <span className="text-gray-400">123456</span>
        <br />
      </p>
      <div className="flex mt-6 gap-x-6 items-center">
        <ElevatedButton onClick={props.modalRef.current?.hide}>
          Close
        </ElevatedButton>
        <Link href={props.url as string} target="_blank">
          <ElevatedButton>Go to website</ElevatedButton>
        </Link>
      </div>
    </div>
  );
};

export default InfinityComicWebModal;
