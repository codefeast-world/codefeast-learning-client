'use client';

import { ArrowRight, LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const socialIcons = [
    { icon: '/assets/contact-section/mail-icon.svg', link: 'mailto:hello@codefeast.in' },
    { icon: '/assets/contact-section/linkedin-icon.svg', link: 'https://www.linkedin.com/company/codefeast/posts/?feedView=all' },
    { icon: '/assets/contact-section/instagram-icon.svg', link: 'https://www.instagram.com/codefeastworld/', color: 'white' }
];

export function Footer() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                // Sucess toast notification here 
                setEmail('');
            } else {
                setError(data.error || 'Subscription failed. Please try again.');
            }
        } catch (error) {
            console.error('Error', error);
            setError('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='bg-[#148BE721] dark:bg-black py-8 px-6 md:px-12'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                    <div className='flex flex-col md:flex-row gap-12'>
                        <div className='flex flex-col'>
                            <Link href='/' className='inline-block mb-6'>
                                <Image alt='logo' width={150} height={150} src={logo} />
                            </Link>
                            <div className='ml-0 md:ml-10 w-[150px] opacity-70'>
                                <p className='block text-xs'>Devi Nagar, Suraj Kund Road, Meerut, Uttar Pradesh, 250002</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 opacity-70'>
                            <div className='space-y-3'>
                                <Link href='/' className='block text-sm hover:text-blue-400'>
                                    HOME
                                </Link>
                                <Link href='/about' className='block text-sm hover:text-blue-400'>
                                    ABOUT US
                                </Link>
                                <Link href='/faq' className='block text-sm hover:text-blue-400'>
                                    WHY US?
                                </Link>
                                <Link href='/contact' className='block text-sm hover:text-blue-400'>
                                    GET IN TOUCH
                                </Link>
                               
                            </div>
                            <div className='space-y-3'>
                            <Link href='/terms' className='block text-sm hover:text-blue-400'>
                                    TERMS & CONDITIONS
                                </Link>
                                <Link href='/privacy' className='block text-sm hover:text-blue-400'>
                                    PRIVACY POLICY
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <form onSubmit={handleSubscribe} className='flex flex-col items-start'>
                            <label htmlFor='email-subscription' className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                                Subscribe for Updates
                            </label>
                            <div className='flex flex-col w-full'>
                                <div className='flex items-center w-full'>
                                    <input 
                                        id='email-subscription' 
                                        type='email' 
                                        placeholder='Enter your email' 
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            // Clear error when user starts typing
                                            if (error) setError('');
                                        }}
                                        className={`bg-transparent border-b py-2 px-0 focus:outline-none w-full max-w-xs ${
                                            error ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-blue-400'
                                        }`}
                                    />
                                    <button 
                                        type='submit'
                                        className='ml-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-full p-2' 
                                        title='Subscribe'
                                        disabled={isSubmitting}
                                    >
                                        {!isSubmitting ? <ArrowRight className='h-4 w-4' /> : <LoaderCircle className='h-4 w-4 animate-spin'/>}
                                    </button>
                                </div>
                                {error && (
                                    <p className='mt-1 text-sm text-red-500'>{error}</p>
                                )}
                            </div>
                        </form>

                        <div className='mt-4'>
                            <button 
                                onClick={() => router.push('/contact')} 
                                className='text-white inline-flex items-center justify-center px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105 active:scale-95 rounded-md font-medium text-sm'
                            >
                                Enroll Now
                            </button>
                        </div>

                        <div className='flex gap-4 justify-end'>
                            {socialIcons.map((social, index) => (
                                <Link 
                                    key={index} 
                                    href={social.link} 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    className='text-gray-400 hover:text-white'
                                >
                                    <Image alt='social' src={social.icon} height={24} width={24} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500'>
                    © 2025 Codefeast. All rights reserved. 2025.
                </div>
            </div>
        </div>
    );
}
