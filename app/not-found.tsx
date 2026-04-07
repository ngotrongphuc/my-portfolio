import Link from 'next/link';
import { cn } from './utils/cn';
import { styles } from './ui/styles';

export default function NotFound() {
  return (
    <section className="h-screen bg-not-found bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full bg-gray-950/50 flex flex-col justify-center items-center">
        <h1 className={cn(styles.sectionHeadText, 'mb-4')}>Not Found</h1>
        <p className={cn(styles.sectionSubText, 'mb-10 text-gray-100')}>
          Could not find requested resource
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </section>
  );
}
