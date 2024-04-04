import Link from 'next/link';
import { useRef, useState } from 'react';
import { ModalIds, ModalRefType, Url, UrlList } from '../utils/types';
import Modal from './Modal';
import AwesomeChatbotModal from './modals/AwesomeChatbotModal';
import InfinityComicMobileModal from './modals/InfinityComicMobileModal';
import InfinityComicWebModal from './modals/InfinityComicWebModal';

const UrlWrapper = ({
  children: urlData,
  name,
}: {
  children: UrlList;
  name: string;
}) => {
  const modalRef = useRef<ModalRefType>(null);
  const [urlObj, setUrlObj] = useState<Url | null>(null);

  const showModal = (urlObj: Url) => {
    setUrlObj({ ...urlObj, modalRef });
    modalRef.current?.show();
  };

  const ModalBody = () => {
    if (!urlObj) return null;
    if (urlObj.modalId === ModalIds.InfinityComicWebModal) {
      return <InfinityComicWebModal {...urlObj} />;
    }
    if (urlObj.modalId === ModalIds.InfinityComicMobileModal) {
      return <InfinityComicMobileModal {...urlObj} />;
    }
    if (urlObj.modalId === ModalIds.AwesomeChatbotModal) {
      return <AwesomeChatbotModal {...urlObj} />;
    }
    return null;
  };

  return typeof urlData === 'string' ? (
    <Link
      href={urlData}
      target="_blank"
      className="underline text-blue-500 px-2 first:pl-0"
    >
      Website
    </Link>
  ) : (
    <div>
      <Modal ref={modalRef} title={`${name} - ${urlObj?.title}`}>
        <ModalBody />
      </Modal>
      <div className="divide-x-2">
        {urlData.map((url: Url, index) =>
          url.modalId ? (
            <span
              key={index}
              className="underline text-blue-500 cursor-pointer px-2 first:pl-0"
              onClick={() => showModal(url)}
            >
              {url.title}
            </span>
          ) : (
            <Link
              key={index}
              href={url.url}
              target="_blank"
              className="underline text-blue-500 px-2 first:pl-0"
            >
              {url.title}
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default UrlWrapper;
