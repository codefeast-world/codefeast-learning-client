import React from 'react';
import Image from 'next/image';
import aboutTech from '@/public/assets/about/about-tech.svg';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const AboutCodeFeast = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 w-full max-w-6xl mx-auto px-4 py-12'>
            {/* Left Image */}
            <div className='w-full md:w-1/2 flex justify-center'>
                <Image src={aboutTech} width={500} height={500} alt='About CodeFeast' className='w-full max-w-sm md:max-w-md object-contain' />
            </div>

            {/* Right Text */}
            <div className='w-full md:w-1/2 flex flex-col items-start gap-6'>
                {/* Header + Paragraph */}
                <div className='flex flex-col items-start gap-8 w-full'>
                    <div className='flex flex-col items-start gap-2.5 w-full'>
                        <h2 className='text-white text-3xl md:text-4xl font-semibold capitalize font-[Poppins] leading-snug'>About CodeFeast</h2>
                        <p className='text-white text-base md:text-lg leading-relaxed font-normal capitalize font-[Poppins]'>At CodeFeast, we’re all about making coding easy and enjoyable for everyone! Whether you’re just getting started or want to level up your skills, our laid-back courses and one-on-one mentorship will help you find your way to success.</p>
                    </div>

                    {/* Stats Section */}
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full'>
                        <div className='flex flex-col items-start gap-2 w-full sm:w-1/2'>
                            <h3 className='text-white text-xl font-semibold capitalize font-[Poppins]'>50%</h3>
                            <p className='text-white text-sm font-normal capitalize font-[Poppins] opacity-60'>A workshop transforms a vacant space into a tech hub.</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full sm:w-1/2'>
                            <h3 className='text-white text-xl font-semibold capitalize font-[Poppins]'>50%</h3>
                            <p className='text-white text-sm font-normal capitalize font-[Poppins] opacity-60'>A workshop transforms a vacant space into a tech hub.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                    <Button onClick={() => router.push('/contact')} className='bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-white px-8 py-6 rounded-md text-lg transition-transform transform hover:scale-105 active:scale-95'>
                        Explore Courses
                    </Button>
                    <Button onClick={() => router.push('/contact')} variant='outline' className='border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 px-8 py-6 rounded-md text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'>
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AboutCodeFeast;
