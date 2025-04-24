'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import blogs from '@/constants/blogs.json';
import blogContent from '@/constants/blog-content.json';
import Image from 'next/image';
import BlogReviews from '@/components/BlogReviews';

function BlogDetails() {
    const { id } = useParams(); 
    const blog = blogs.find((blog) => blog.id === Number(id));

    const content = blogContent.find((content) => content.id === Number(id))?.content;

    if (!blog) {
        return <div className="text-center text-white">Blog not found</div>;
    }

    return (
        <section className="w-full px-8 py-24 md:py-28 border-b border-white/10">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Hero Image */}
                <div
                    className="w-full h-64 md:h-96 rounded-xl bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${blog.thumbnail}')`,
                    }}
                ></div>

                {/* Title + Meta Info */}
                <div className=" my-8  flex flex-col gap-5">
                    <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight font-poppins mb-4">
                        {blog.title}
                    </h1>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-white/60 text-sm font-work">
                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <Image    
                            width={150} 
                            height={150}                           
                                src={blog.authorImage}
                                alt={blog.author}
                                className="w-9 h-9 rounded-full object-cover"
                                unoptimized
                            />
                            <span className="text-white text-base font-medium">
                                {blog.author}
                            </span>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-white/60">
                            {/* Time */}
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                    />
                                </svg>
                                <span>{blog.date}</span>
                            </div>

                            {/* Views */}
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0c0 1.75-4.5 6.5-10.5 6.5S1.5 13.75 1.5 12 6 5.5 12 5.5s10.5 4.75 10.5 6.5z"
                                    />
                                </svg>
                                <span>1.2k views</span>
                            </div>

                            {/* Comments */}
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7a8.44 8.44 0 01-3-.54L3 20l1.48-3.718A7.965 7.965 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                                    />
                                </svg>
                                <span>11</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="text-lg leading-relaxed text-white/80 font-work">
                    {content || 'Content not available.'}
                </div>
                {/* Blog Reviews  */}
                <BlogReviews/>
            </div>
        </section>
    );
}

export default BlogDetails;