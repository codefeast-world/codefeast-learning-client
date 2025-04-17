'use client';

import React from 'react';
import { Lightbulb, Settings, Brain, Shield, Clock, DollarSign, Code, Users, Zap, Lock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import faqbg from '@/public/assets/faq-page/faqbg.png';
import faqData from '@/constants/faq-section.json';
const iconMap = {
    Lightbulb,
    Settings,
    Brain,
    Shield,
    Clock,
    DollarSign,
    Code,
    Users,
    Zap,
    Lock,
    MessageSquare
};
function Page() {
    return (
        <div>
            {/* Hero Section */}
            <section className='bg-blue-100 dark:bg-gray-900 sm:min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-0'>
                <div
                    className='absolute inset-0 z-0'
                    style={{
                        backgroundImage: `url(${faqbg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)',
                        transform: 'scale(1.1)'
                    }}
                />
                <div className='absolute inset-0 bg-black/50 z-[1]' />
                <div className='text-center max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-16 relative z-[2]'>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6'>
                        🛠️ Why Us?
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-lg text-gray-200 mb-8 max-w-2xl mx-auto'>
                        At Codefeast, we don’t just teach coding—we transform careers. Our mentorship-driven approach and hands-on projects make you a skilled developer, ready to thrive in the tech world.
                    </motion.p>
                </div>
            </section>
    
            {/* Features Section */}
            <section className='container mx-auto py-16 md:py-24 w-[80%]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {faqData.features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                        return (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className='bg-[#148BE721] dark:bg-[#101215] p-8 rounded-2xl border-[0.75px] border-[#148BE721] hover:border-[#148BE7] transition-all duration-300'>
                                <div className='flex flex-col items-center text-center space-y-4'>
                                    <div className='w-12 h-12 rounded-full bg-[#148BE7] flex items-center justify-center'>{IconComponent && <IconComponent className='w-6 h-6 text-white' />}</div>
                                    <h3 className='text-xl font-semibold text-white'>{feature.title}</h3>
                                    <p className='text-gray-300'>{feature.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
    
            {/* What Sets Us Apart Section */}
            <section className='container mx-auto py-16 md:py-24 w-[80%]'>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>🚀 What Sets Codefeast Apart?</h2>
                    <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
                        At Codefeast, we don’t just teach you to code—we help you build a career in tech. Our personalized mentorship, real-world projects, and career guidance provide a comprehensive learning experience.
                    </p>
                </motion.div>
    
                <div className='space-y-12'>
                    {faqData.strengths.map((strength, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className='bg-[#148BE721] dark:bg-[#101215] p-8 rounded-2xl border-[0.75px] border-[#148BE721] hover:border-[#148BE7] transition-all duration-300'>
                            <div className='flex flex-col space-y-6'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#148BE7] flex-shrink-0 flex items-center justify-center'>{iconMap[strength.icon as keyof typeof iconMap] && React.createElement(iconMap[strength.icon as keyof typeof iconMap], { className: 'w-5 h-5 sm:w-6 sm:h-6 text-white' })}</div>
                                    <h3 className='text-xl font-semibold text-white'>{strength.title}</h3>
                                </div>
                                <div className='text-left'>
                                    <ul className='space-y-3'>
                                        {strength.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className='flex items-start gap-3 text-gray-300'>
                                                <span className='text-[#148BE7] flex-shrink-0'>•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
    
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} className='text-center mt-16'>
                    <h3 className='text-2xl font-bold text-white mb-4'>📢 Why Settle for Less?</h3>
                    <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
                        With Codefeast, you don’t just get coding tutorials—you get real-world mentorship, project experience, and job-ready skills.
                    </p>
                    <p className='text-xl font-semibold text-[#148BE7]'>🔥 Let’s build something great together! 🚀</p>
                </motion.div>
            </section>
        </div>
    );
    
}

export default Page;
