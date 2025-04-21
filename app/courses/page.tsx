'use client';
import courses from '@/constants/courses.json';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CampBanner from '@/public/assets/courses/camp-banner.svg';
export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen pt-28">
      <div className="max-w-[80%] mx-auto">
        {/* Banner Section  */}
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#0D62A5] to-[#0A385B] rounded-2xl overflow-hidden mb-12">
          {/* Left Section */}
          <div className="flex-1 p-8 md:p-12 text-white">
            <h1 className="text-4xl md:text-5xl font-semibold uppercase leading-tight mb-4">
              Learn something new every day.
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6">
              Become professionals and ready to join the world.
            </p>
            <button
              className="bg-white text-[#0D5A98] font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition"
              onClick={() => router.push('/courses')}
            >
              Explore Courses
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 relative">
            <Image
              src={CampBanner}
              alt="Banner"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-[#188EF8] dark:text-white text-3xl md:text-4xl font-bold mb-12 text-center">
          Explore Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-6 border dark:border-[#333] hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold text-[#188EF8] dark:text-white mb-4">
                {course.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Pricing:</strong> {course.price}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Start Date:</strong> {course.startDate}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Duration:</strong> {course.duration}
              </p>
              <button
                onClick={() => router.push(course.slug)}
                className="bg-[#188EF8] text-white px-4 py-2 rounded-lg hover:bg-[#0f6dc8] transition-colors"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}