'use client';
import type React from 'react';
import { HeroSection } from '@/components/hero';
import { SuccessStories } from '@/components/success-stories-section';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import img1 from '@/public/assets/hero/learning-hero.svg';
import { StagesInterview } from '@/components/stages-interview';
import livePros from '@/constants/live-pros.json';
import companiesStrip from '@/public/assets/hero/companies-strip.svg';
import Image from 'next/image';
import QuestionsComponent from '@/components/faq';
import AboutCodeFeast from '@/components/AboutCodeFeast';
export default function Home() {
    const router = useRouter();
    const heroRef = useRef<HTMLDivElement>(null);
    return (
        <div className='w-screen min-h-screen pt-28'>
            <div ref={heroRef}>
          <HeroSection
              MainHeading='Learn Coding with Mentorship'
              SubHeading='Transform your skills with self-paced courses and one-on-one guidance from industry experts.'
              Button1='Explore Courses'
              onClick1={() => router.push('/contact')}
                                                        Button2="Learn More"
              onClick2={() => router.push('/contact')}
              img={img1}
          />
            </div>
            <Image
          alt='Companies'
          width={1500}
          height={80}
          src={companiesStrip}
            />
            <StagesInterview Heading='Learn at your pace with live pros!' data={livePros} />
            <AboutCodeFeast/>
            <SuccessStories />
            <QuestionsComponent/>
        </div>
    );
}
