import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackgroundProps } from '@/types';

const HeroBackground: React.FC<HeroBackgroundProps> = ({
    backgroundImage,
    overlay = true,
    overlayColor = 'bg-black/50',
    heading,
    subheading,
    headingAnimation = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } },
    subheadingAnimation = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 } },
    headingClassName = 'text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6',
    subheadingClassName = 'text-lg text-gray-200 mb-8 max-w-2xl mx-auto',
    containerClassName = 'text-center max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-16 relative z-[2]',
}) => {
    return (
        <section
            style={{
                backgroundImage: `url(${typeof backgroundImage === 'string' ? backgroundImage : 'src' in backgroundImage ? backgroundImage.src : ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="relative sm:min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0"
        >
            {/* Overlay */}
            {overlay && <div className={`absolute inset-0 ${overlayColor} z-[1]`} />}

            {/* Content */}
            <div className={containerClassName}>
                <motion.h1 {...headingAnimation} className={headingClassName}>
                    {heading}
                </motion.h1>
                <motion.p {...subheadingAnimation} className={subheadingClassName}>
                    {subheading}
                </motion.p>
            </div>
        </section>
    );
};

export default HeroBackground;