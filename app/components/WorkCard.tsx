import Image from 'next/image';
import { Company } from '../utils/types';

const WorkCard = ({ name, logo, position, time, description }: Company) => {
  return (
    <div className="w-[450px] h-[450px] bg-gray-900 rounded-3xl p-6">
      <div className="flex">
        <Image
          src={`/companies/${logo}`}
          alt={name}
          width={60}
          height={60}
          className="bg-white"
        />
        <div className='flex-1 pl-6'>
        <h2 className="text-xl font-bold">{position}</h2>
        <h3 className='font-medium text-gray-300'>{name}</h3>
        <h4 className='text-sm text-gray-300'>{time}</h4>
        </div>
      </div>
      {Array.isArray(description) ? (
        <ul className='list-disc pl-6'>
          {description.map((item, index) => (
            <li key={index} className='pt-2 first:pt-6'>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};

export default WorkCard;
