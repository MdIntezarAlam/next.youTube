/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found - 404 Error - Cartibuy.sa',
  description:
    'The page you are looking for does not exist on Cartibuy.sa. We apologize for the inconvenience. Please return to our homepage or use our search to find what you are looking for.',
  keywords: '404 Error, Page Not Found, Cartibuy.sa, website error',
  robots: 'noindex, nofollow',
};

export default function NotFoundPage() {
  return (
    <div className='flex h-full flex-col items-center'>
      <div className='relative h-[60vh] w-full '>
        <Image src='/404.png' alt='404' layout='fill' objectFit='cover' />
      </div>
      <div className=' flex flex-col items-center mt-10'>
        <p className='mb-5 w-[90%] text-center font-semibold md:max-w-[60%]'>
          Search for other
        </p>

        <Link href='/search?query=""&limit=40&skip=0&category=All'>
          <button
            type='button'
            className='h-fit rounded-md px-4 py-2 text-sm font-semibold'
          >
            While we're eager to serve you, we currently may not have the
            details you may be looking for. But don't worry, we're actively
            working on it.
          </button>
        </Link>
      </div>
    </div>
  );
}
