'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ModalRefType, Url, UrlList } from '../utils/types';
import { Modal } from './Modal';
import { ProjectModal } from './ProjectModal';

/** Props for `UrlWrapper`. Renders a single link or a list of links/modals. */
type UrlWrapperProps = {
  children: UrlList;
  name: string;
};

/** A URL entry should open a modal if it carries any modal-specific data. */
const hasModalContent = (url: Url): boolean =>
  !!(
    url.description ||
    url.qrUrl ||
    url.apkUrl ||
    (url.testAccounts && url.testAccounts.length > 0) ||
    url.showWebsiteButton
  );

export const UrlWrapper = ({ children: urlData, name }: UrlWrapperProps) => {
  const modalRef = useRef<ModalRefType>(null);
  const [activeUrl, setActiveUrl] = useState<Url | null>(null);

  if (typeof urlData === 'string') {
    return (
      <Link
        href={urlData}
        target="_blank"
        className="underline text-blue-500 px-2 first:pl-0"
      >
        Website
      </Link>
    );
  }

  const openModal = (url: Url) => {
    setActiveUrl(url);
    modalRef.current?.show();
  };

  return (
    <div>
      <Modal
        ref={modalRef}
        title={activeUrl ? `${name} - ${activeUrl.title}` : ''}
      >
        {activeUrl && (
          <ProjectModal
            url={activeUrl}
            onClose={() => modalRef.current?.hide()}
          />
        )}
      </Modal>
      <div className="divide-x-2">
        {urlData.map((url, index) =>
          hasModalContent(url) ? (
            <span
              key={index}
              className="underline text-blue-500 cursor-pointer px-2 first:pl-0"
              onClick={() => openModal(url)}
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
