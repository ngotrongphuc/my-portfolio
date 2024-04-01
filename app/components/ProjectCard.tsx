import Image from 'next/image';
import { Company, Project } from '../utils/types';
import TextWithLink from './TextWithLink';
import styles from '../ui/styles';

const ProjectCard = ({ name, logo, description }: Project) => {
  return (
    <div className={`w-full xs:w-[350px] ${styles.styledCard}`}>
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
      {Array.isArray(description) ? (
        <ul className="list-disc pl-6">
          {description.map((item, index) => (
            <li key={index} className="pt-2 first:pt-6">
              <TextWithLink>{item}</TextWithLink>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list-disc pl-6">
          <li className="pt-2 first:pt-6">
            <TextWithLink>{description}</TextWithLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProjectCard;
