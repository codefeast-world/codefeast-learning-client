'use client';
import { useEffect, useRef, useState } from 'react';
import TncBg from '@/public/assets/tnc-page/Tnc.png';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SectionRefs } from '@/types';
import TERMS_SECTIONS from '@/constants/terms.json';

const TAGS = TERMS_SECTIONS.map((section) => section.tag);

function Page() {
    const [activeTag, setActiveTag] = useState<string>(TAGS[0]);
    const contentRefs = useRef<SectionRefs>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.getAttribute('data-section');
                        const activeSection = TERMS_SECTIONS.find((section) => section.id === sectionId);
                        if (activeSection) {
                            setActiveTag(activeSection.tag);
                        }
                    }
                });
            },
            { threshold: 0.5, rootMargin: '0px 0px -50% 0px' }
        );

        
        const observedElements = Object.values(contentRefs.current);

        observedElements.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observedElements.forEach((element) => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = contentRefs.current[sectionId];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className='relative min-h-screen '
            style={{
                backgroundImage: `url(${TncBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className='absolute inset-0 '></div>

            <div className='relative flex flex-col md:flex-row  p-0 md:p-12 pt-20 md:pt-36 pb-16'>
                {/* Left Sidebar */}
                <section className='w-full md:w-[360px]  p-6 '>
                    <div
                        className='w-full rounded-2xl border-none md:border md:border-gray-800 overflow-hidden backdrop-blur-xl'
                        style={{
                            background: 'linear-gradient(180deg, rgba(38, 38, 39, 0.3) 0%, rgba(44, 45, 48, 0.3) 100%)'
                        }}
                    >
                        <div className='p-4 space-y-1 text-sm'>
                            {TAGS.map((tag) => (
                                <div key={tag} className='relative text-sm'>
                                    <button
                                        onClick={() => {
                                            setActiveTag(tag);
                                            scrollToSection(TERMS_SECTIONS.find((s) => s.tag === tag)?.id || '');
                                        }}
                                        className={`relative py-4 px-6 w-full text-left transition-colors font-['IBM Plex Sans'] ${
                                            tag === activeTag
                                                ? 'text-[#3B82F6]' 
                                                : 'text-white text-opacity-60 hover:text-opacity-100' 
                                        }`}
                                    >
                                        {/* Left Line */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${tag === activeTag ? 'bg-[#3B82F6]' : 'bg-gray-600'}`}></div>
                                        {tag}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Right Content Area */}
                <ScrollArea className='h-screen flex-1 p-8'>
                    <div className='max-w-3xl mx-auto space-y-8'>
                        {TERMS_SECTIONS.map((section) => (
                            <div
                                key={section.id}
                                ref={(el) => {
                                    contentRefs.current[section.id] = el;
                                }}
                                data-section={section.id}
                                className='py-8'
                            >
                                <h2 className='text-2xl  mb-4 text-white'>{section.title}</h2>
                                <p className='text-gray-300'>{section.content}</p>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}

export default Page;
