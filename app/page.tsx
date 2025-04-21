'use client';
import type React from 'react';
import { HeroSection } from '@/components/hero';
import { SuccessStories } from '@/components/success-stories-section';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import img1 from '@/public/assets/hero/learning-hero.svg';
import { StagesInterview } from '@/components/stages-interview';
import livePros from '@/constants/live-pros.json';
import Image from 'next/image';
import QuestionsComponent from '@/components/faq';
import AboutCodeFeast from '@/components/AboutCodeFeast';
import alumniData from '@/constants/alumni-companies.json';
export default function Home() {
    const router = useRouter();
    const heroRef = useRef<HTMLDivElement>(null);
    return (
        <div className=' min-h-screen pt-28'>
            <div ref={heroRef}>
          <HeroSection
              MainHeading='Learn Coding with Mentorship'
              SubHeading='Transform your skills with self-paced courses and one-on-one guidance from industry experts.'
              Button1='Explore Courses'
              onClick1={() => router.push('/courses')}
                                                        Button2="Learn More"
              onClick2={() => router.push('/contact')}
              img={img1}
          />
            </div>
            <div className="max-w-[80%] mx-auto">
                    <h2 className="text-[#188EF8] dark:text-white text-2xl md:text-3xl font-bold mb-16 text-center">
                   Learn with the Mentors  from the Top Product Firms                   </h2>
                    
                </div>

            <div className="h-20 pt-0 pb-8 gap-5 border-none  dark:bg-transparent flex items-center">
                            <div className=" w-[80%] mx-auto flex items-center justify-between dark:bg-transparent">
                                {alumniData.map((company, index) => (
                                    <div key={index} className="h-12 relative flex items-center">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={96}
                                            height={32}
                                            className="object-contain invert dark:invert-0 w-28"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
            
            <StagesInterview Heading='Learn at your pace with live pros!' data={livePros} />
            <AboutCodeFeast/>
            <SuccessStories />
            <QuestionsComponent/>
        </div>
    );
}
