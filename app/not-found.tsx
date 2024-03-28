import Link from 'next/link';
import styles from './ui/styles';

export default function NotFound() {
  return (
    <section className="h-screen bg-not-found bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full bg-gray-950/50  flex flex-col justify-center items-center">
        <h2 className={styles.sectionHeadText}>Not Found</h2>
        <p className={`${styles.sectionSubText} text-gray-100 pb-6`}>
          Could not find requested resource
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </section>
  );
}
