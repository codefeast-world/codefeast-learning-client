'use client';

import { useState } from 'react';

import faqItems from '@/constants/faq-items.json';
import { AccordionItem } from './Accordion';

export default function QuestionsComponent() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className='mt-36 text-white p-6 w-full max-w-6xl mx-auto pb-28'>
            <div className='text-center mb-8'>
                <h2 className='text-[#148BE7] dark:text-white text-4xl font-semibold mb-4'>Have Questions? We’re Here To Help</h2>
                <p className='text-[#333333] dark:text-gray-300 text-base max-w-3xl mx-auto'>Frequently Asked Questions About Coding: Find answers to the most common inquiries we get. If your question isn&apos;t covered, feel free to ask!</p>
            </div>

            <div className='max-w-3xl mx-auto'>
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} title={item.title} content={item.content} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
                ))}
            </div>
        </div>
    );
} 
