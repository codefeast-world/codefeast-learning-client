'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import teamIllustration from '@/public/assets/about/whoweare-removebg-preview-enhance.png';
import missionIllustration from '@/public/assets/about/mission-removebg-preview.png';
import { SuccessStories } from '@/components/success-stories-section';

export default function AboutPage() {
    return (
        <div className='mt-16'>
            {/* Who We Are Section */}
            <section className="container mx-auto py-16 md:py-24 w-[80%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Content - Now first in mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <Image
                                src={teamIllustration}
                                alt="Team Collaboration"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Content - Now second in mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Who We Are
                            </h1>
                            <p className="text-lg text-[#148BE7] font-medium sm:text-xl">
                            Your Pathway to World-Class Coding Education & Mentorship
                            </p>
                        </div>
                        <p className="text-base leading-8 text-gray-300 sm:text-lg">
                        Founded in May 2021, Codefeast is a tech education platform focused on transforming lives through software development training and personalized mentorship. We help aspiring developers and career switchers gain industry-ready skills, build real-world projects, and become confident, job-ready professionals in today&apos;s evolving tech landscape.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                                <span className="text-base text-gray-300 sm:text-lg">Mentor-Led Live Sessions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                                <span className="text-base text-gray-300 sm:text-lg">Hands-on Real-World Projects</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                                <span className="text-base text-gray-300 sm:text-lg">Career Guidance & Job Support</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <p className="text-base text-gray-400 sm:text-lg">
                            Impacting learners across <span className="text-white font-medium">SaaS</span>, <span className="text-white font-medium">FinTech</span>, <span className="text-white font-medium">HealthTech</span>, and more through transformative tech education.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="container mx-auto py-16 md:py-24 w-[80%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
                    >
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <Image
                                src={missionIllustration}
                                alt="Mission and Vision"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Our Mission & Vision
                            </h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#148BE7] mb-4">Mission</h3>
                                    <p className="text-base leading-8 text-gray-300 sm:text-lg">
    At Codefeast, our mission is to <span className="text-white font-medium">democratize coding education</span> through hands-on training, real-world exposure, and one-on-one mentorship. We are dedicated to empowering individuals with the right skills and mindset to build impactful tech careers—regardless of their background or starting point.
</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-[#148BE7] mb-4">Vision</h3>
                                    <p className="text-base leading-8 text-gray-300 sm:text-lg">
    We envision a future where anyone with the passion to learn can access <span className="text-white font-medium">quality tech education</span> and thrive in the global tech ecosystem. Through our supportive community, industry mentorship, and career guidance, Codefeast aims to produce confident, job-ready developers who build and grow with purpose.
</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
                        
            <SuccessStories />
        </div>
    );
}