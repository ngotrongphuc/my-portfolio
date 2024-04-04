import Image from 'next/image';
import styles from '../ui/styles';
import { Project } from '../utils/types';
import TextWithLink from './TextWithLink';
import UrlWrapper from './UrlWrapper';

const ProjectCard = ({ name, logo, description, url }: Project) => {
  return (
    <div className={`w-full xs:w-[360px] ${styles.styledCard}`}>
      <div className="flex">
        <Image
          src={`/projects/${logo}`}
          alt={name}
          width={60}
          height={60}
          // className="bg-white"
        />
        <div className="flex-1 pl-6">
          <h2 className="text-xl font-bold">{name}</h2>
          {/* <h3 className="font-medium text-gray-300">{name}</h3> */}
          {/* <h4 className="text-sm text-gray-300">{time}</h4> */}
        </div>
      </div>
      <ul className="list-disc pt-5 pl-5 space-y-2">
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <li key={index}>
              <TextWithLink>{item}</TextWithLink>
            </li>
          ))
        ) : (
          <li>
            <TextWithLink>{description}</TextWithLink>
          </li>
        )}
        {url && (
          <li>
            <UrlWrapper name={name}>{url}</UrlWrapper>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectCard;
