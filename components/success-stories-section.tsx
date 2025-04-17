'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const storiesData = [
    {
      number: 100,
      suffix: "+",
      title: "Students Taught",
      description: "Empowering learners through practical coding lessons and real-world projects",
    },
    {
      number: 50,
      suffix: "+",
      title: "Career Switches",
      description: "Learners transitioned into tech from non-tech backgrounds with our mentorship",
    },
    {
      number: 20,
      suffix: "+",
      title: "Industry Mentors",
      description: "Experienced developers guiding learners with personalized support and insights",
    },
  ];
  

export function SuccessStories() {
    return (
        <section className="container mx-auto py-16 md:py-24 w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-[#188EF8] dark:text-white text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {storiesData.map((story, index) => (
                            <StoryCard 
                                key={index} 
                                number={story.number}
                                suffix={story.suffix}
                                title={story.title}
                                description={story.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

interface StoryProps {
    number: number;
    suffix: string;
    title: string;
    description: string;
}

function StoryCard({ number, suffix, title, description }: StoryProps) {
    const [count, setCount] = useState(0);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = number / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    setCount(number);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, number]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-[#148BE721] dark:bg-[#101215] p-6 rounded-lg text-center h-[300px] flex justify-center items-center flex-col gap-6 border-[0.75px] border-[#148BE721] hover:border-[#148BE7] transition-all duration-300"
        >
            <div className="space-y-2">
                <div className="flex items-center justify-center">
                    <span className="text-[#188EF8] dark:text-white font-bold text-6xl">
                        {count}
                    </span>
                    <span className="text-[#188EF8] dark:text-white font-bold text-4xl ml-1">
                        {suffix}
                    </span>
                </div>
                <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
            <p className="dark:text-[#FFFFFF] text-[#333333] text-base opacity-50">{description}</p>
        </motion.div>
    );
}