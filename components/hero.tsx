import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection({ MainHeading, SubHeading, Button1, onClick1, Button2, onClick2, img }: { MainHeading: string; SubHeading: string; Button1: string; onClick1: () => void; Button2: string; onClick2: () => void; img: StaticImageData }) {
    return (
        <section className='container mx-auto py-16 md:py-24 w-[80%]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='space-y-6'>
                    <h1 className='text-4xl text-[#148BE7] dark:text-white md:text-5xl lg:text-6xl font-semibold leading-tight'>{MainHeading}</h1>
                    <p className='text-lg text-[#333333] dark:text-gray-300'>{SubHeading}</p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                        <Button onClick={onClick1} className='bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-white px-8 py-6 rounded-md text-lg transition-transform transform hover:scale-105 active:scale-95'>
                            {Button1}
                        </Button>
                        <Button onClick={onClick2} variant='outline' className='border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 px-8 py-6 rounded-md text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'>
                            {Button2}
                        </Button>
                    </div>
                </div>
                <div className='relative h-[300px] md:h-[400px] flex justify-end'>
                    <Image src={img} alt={SubHeading} className='object-contain ' />
                </div>
            </div>
        </section>
    );
}
