'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Pagination from '../Pagenation/Pagination';

export default function ImageGallery() {
  const router = useRouter();
  const imageCount = 9;
  const imagesArray = Array(imageCount).fill(0);
  const totalPages = 12;

  const handlePageClick = (pageNumber) => {
    router.push(`/`); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-3 sm:justify-center sm:p-4 z-0">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 ">
        {imagesArray.map((_, index) => (
          <div key={index} className="relative">
            <Image
              src="/bottle.svg" 
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className='hover:scale-[1.02] shadow-sm cursor-pointer transition-transform duration-200'
            />
          </div>
        ))}
      </div>
      <div className='ml-auto'> <Pagination totalPages={12} /></div>
    </div>
  );
}
