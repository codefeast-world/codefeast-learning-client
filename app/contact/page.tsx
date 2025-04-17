import ContactComponent from '@/components/contact-form';
import React from 'react';
import ContactBg from '@/public/assets/tnc-page/Tnc.png';

function Page() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${ContactBg.src})`,
        }}
        className=" bg-blue-100 dark:bg-gray-900 sm:min-h-[70vh] md:h-screen flex items-start sm:items-center justify-center bg-center bg-cover "
      >
        <div className='text-center px-6 md:px-12 lg:px-24 py-16 sm:mt-0 mt-16 '>
          <h1 className="text-4xl text-[#148BE7] dark:text-white md:text-5xl lg:text-6xl font-semibold leading-tight">
          We&apos;re Here to Help          </h1>
          <p className="text-lg text-[#333333] dark:text-gray-300">
            Have questions or need assistance? Contact our team today.
          </p>
         
        </div>

      </section>
     <div >
      <ContactComponent />
      </div>
    </div>
  );
}

export default Page;