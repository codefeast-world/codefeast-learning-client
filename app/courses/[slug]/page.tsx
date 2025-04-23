'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import courses from '@/constants/courses.json';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function CourseDetailsPage() {
  const router = useRouter();
  const { slug } = useParams();
  const course = courses.find((course) => course.slug === `/courses/${slug}`);
  const [activeTab, setActiveTab] = useState<'about' | 'reviews'>('about');

  if (!course) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-2xl font-bold text-red-500'>Course not found</h1>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-28 bg-gray-900 text-white py-16'>
      <div className='max-w-[80%] mx-auto flex flex-col gap-16'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='flex-1 bg-gray-700 rounded-2xl h-72 md:h-96 overflow-hidden'>
            <Image
              width={800}
              height={800}
              src={course.image}
              alt={course.title}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='flex-[0.5] bg-[#0A0C10] border border-gray-600 rounded-lg p-6 h-72 md:h-96 flex flex-col justify-between'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-end gap-4'>
                <span className='text-2xl font-bold text-white'>₹{course.price}</span>
                <span className='text-lg line-through text-gray-400'>₹{course.originalPrice}</span>
                <div className='bg-[#148BE7] text-white text-xs font-medium px-3 py-1 rounded-full'>{course.discount}</div>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              {[
                `${course.sections} Sections`,
                `${course.lectures} Lectures`,
                course.length,
                course.language
              ].map((text, idx) => (
                <div key={idx} className='flex items-center gap-4'>
                  <div className='text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className='text-sm text-white'>{text}</span>
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-4'>
              <button className='bg-[#148BE7] text-white font-bold py-3 rounded-lg shadow-md'
              onClick={()=>router.push('/contact')}
              >Buy Now</button>
              <button className='border border-gray-400 text-gray-400 font-medium py-3 rounded-lg flex items-center justify-center gap-2'
              onClick={()=>router.push('/contact')}
              >
                <div className='text-gray-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-sm font-normal text-gray-400'>{course.subtitle}</p>
          <h1 className='text-4xl font-normal text-white leading-tight'>{course.title}</h1>
          <div className='flex items-center gap-6'>
            <span className='text-sm font-normal text-[#148BE7]'>{course.instructor}</span>
            <div className='flex items-center gap-2'>
              <div className='w-6 h-6 bg-[#F4D876] rounded-full flex items-center justify-center'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-4 h-4 text-white'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
              </div>
              <span className='text-base font-normal text-white'>{course.rating}</span>
              <span className='text-sm font-normal text-gray-400'>({course.ratingsCount.toLocaleString()} ratings)</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='flex border-b border-gray-700'>
          {['about', 'reviews'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-lg font-medium ${
                activeTab === tab ? 'text-[#148BE7] border-b-2 border-[#148BE7]' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab as 'about' | 'reviews')}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'about' && (
          <div className="flex flex-col items-start gap-6 w-full max-w-[794px]">
            <h2 className="text-xl font-semibold text-white leading-[28px]">About Course</h2>
            <p className="text-base font-normal text-gray-400 leading-[26px]">{course.description}</p>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white leading-[24px]">Syllabus</h3>
              <ul className="list-disc list-inside text-base text-gray-400 leading-[26px]">
                {course.syllabus.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl font-bold'>Reviews</h2>
            <div className='flex flex-col gap-4'>
              {course.reviews.map((review, i) => (
                <div key={i} className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gray-700 rounded-full'></div>
                  <div>
                    <h3 className='text-lg font-semibold text-[#148BE7]'>{review.name}</h3>
                    <p className='text-gray-400'>{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
