import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../utils/cn';
import { Url } from '../utils/types';
import { ElevatedButton } from './ElevatedButton';

/**
 * Props for `ProjectModal`. Unified body for every project modal —
 * conditionally renders description, QR / APK download, test account
 * details, and an optional "Go to website" button based on `url`.
 */
type ProjectModalProps = {
  url: Url;
  onClose: () => void;
};

export const ProjectModal = ({ url, onClose }: ProjectModalProps) => {
  const hasAccounts = url.testAccounts && url.testAccounts.length > 0;

  return (
    <div className="flex flex-col items-center justify-center leading-8">
      {url.description && <p>{url.description}</p>}

      {url.qrUrl && (
        <Image
          src={url.qrUrl}
          alt={url.url}
          width={200}
          height={200}
          className="my-6 w-[100px] xs:w-[150px] sm:w-[200px] h-[100px] xs:h-[150px] sm:h-[200px]"
        />
      )}

      {url.apkUrl && (
        <div className="flex items-center mb-2">
          <p className="mr-4">Or, download the apk:</p>
          <Link href={url.apkUrl} target="_blank">
            <Image
              src="/apk-icon.png"
              alt="apk icon"
              width={50}
              height={50}
              className="w-[30px] xs:w-[40px] sm:w-[50px] h-[30px] xs:h-[40px] sm:h-[50px]"
            />
          </Link>
        </div>
      )}

      {hasAccounts && (
        <p className="text-left">
          Test account:{' '}
          <span className="text-gray-400">{url.testAccounts!.join(', ')}</span>
          {url.password && (
            <>
              <br />
              Password: <span className="text-gray-400">{url.password}</span>
            </>
          )}
          {url.accountNote && (
            <>
              <br />
              {url.accountNote}
            </>
          )}
        </p>
      )}

      <div
        className={cn(
          'flex mt-6 gap-x-6 items-center',
          !url.showWebsiteButton && 'justify-center',
        )}
      >
        <ElevatedButton onClick={onClose}>Close</ElevatedButton>
        {url.showWebsiteButton && (
          <Link href={url.url} target="_blank">
            <ElevatedButton>Go to website</ElevatedButton>
          </Link>
        )}
      </div>
    </div>
  );
};
