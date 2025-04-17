import Link from 'next/link';
import policySections from '../../constants/privacy-policy-data.json';
type PolicySection = {
    title: string;
    content: string[];
};

const Page = () => {
    return (
        <section className='container mx-auto py-16 md:py-24 w-[80%]'>
            <div className='space-y-6 mt-8 sm:mt-16 '>
                <div className='relative bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col items-start justify-end rounded-2xl p-8' style={{ backgroundImage: `url('/assets/privacy-policy/privacy.png')` }}>
                    <div className='absolute inset-0 bg-black opacity-40 rounded-2xl'></div>
                    <div className='w-full sm:w-[80%] relative z-10'>
    <h1 className='text-3xl font-bold text-gray-800 dark:text-white mb-6'>PRIVACY POLICY</h1>
    <p className='text-gray-600 dark:text-gray-300'>
        At Codefeast Technologies, your privacy and the confidentiality of your personal and learning data are of utmost importance. This Privacy Policy outlines how we collect, use, and protect your information when you engage with our coding education and mentorship services.
    </p>
</div>

                </div>

                <div className='py-8'>
                    {policySections.map((section: PolicySection, index: number) => (
                        <div key={index} className='space-y-4 w-full sm:w-[80%] px-2 md:px-16'>
                            <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mt-8'>{section.title}</h2>
                            <ol className='list-inside text-gray-600 dark:text-gray-300 space-y-4 px-0 sm:px-6 '>
                                {section.content.map((line, i) => (
                                    <li key={i} className='relative pl-8 text-gray-600 dark:text-gray-300 leading-9'>
                                        {/* Numbering */}
                                        <span className='absolute left-0 top-0 font-public-sans font-bold text-right'>{i + 1}.</span>
                                        {/* Content */}
                                        <span className='font-poppins font-normal text-[16px] leading-[150%] tracking-[0px]'>
                                            {line.startsWith('•') ? (
                                                line.slice(1).trim()
                                            ) : line.includes('@') ? (
                                                <Link href={`mailto:${line.trim()}`} className='text-blue-600 hover:underline'>
                                                    {line.trim()}
                                                </Link>
                                            ) : line.includes('http') ? (
                                                <Link href={line.trim()} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                                                    {line.trim()}
                                                </Link>
                                            ) : (
                                                line.trim()
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;
