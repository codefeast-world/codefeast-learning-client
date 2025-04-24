import React from 'react';
import reviews from '@/constants/blog-reviews.json';
import sendMessage from '@/public/assets/sendMessage.svg';
import Image from 'next/image';
const BlogReviews = () => {
  return (
    <div
      className="mt-14 py-16 px-8 md:px-28 rounded-3xl w-full max-w-6xl mx-auto"
      style={{
        background: 'linear-gradient(180deg, rgba(38, 38, 39, 0.5) 0%, rgba(44, 45, 48, 0) 100%)',
      }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Give us Your Opinions</h2>
      <div className="space-y-8">
        {/* Your Reply Section */}
        <p className="text-white text-lg font-medium">Your Reply</p>
        <div className="relative bg-white/5 border border-white/10 rounded-lg p-4 md:p-6">
          <textarea
            className="w-full h-32 bg-transparent text-sm text-gray-400 placeholder-gray-500 outline-none resize-none"
            placeholder="Write your reply here..."
          ></textarea>
          <div className="absolute bottom-4 right-4 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-12 h-12">
              {/* Outer Blurred Circle */}
              <div className="absolute w-12 h-12 rounded-full border border-white/10 opacity-45 blur-md"></div>
              {/* Inner Blurred Circle */}
              <div className="absolute w-10 h-10 rounded-full border border-white/10 opacity-65 blur-sm"></div>
              {/* Send Button */}
              <button
                className="relative  rounded-full flex items-center justify-center"
                title="Send Message"
              >
                <Image src={sendMessage} alt="Send Message" width={150} height={150} />
              </button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <p className="text-white text-lg font-medium">Comments</p>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white bg-opacity-10 p-4 md:p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <Image src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" unoptimized width={150} height={150}/>
              <div>
                <h3 className="text-lg md:text-xl text-blue-400 font-medium">{review.name}</h3>
                <p className="text-xs md:text-sm text-gray-400">{review.description}</p>
              </div>
            </div>
            <p className="text-white text-sm md:text-base mt-3">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogReviews;