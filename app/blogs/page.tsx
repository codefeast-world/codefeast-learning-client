'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import blogBg from '@/public/assets/blogs/blogs-bg.svg';
import BlogCard from '@/components/BlogCard';
import blogs from '@/constants/blogs.json';
import HeroBackground from '@/components/HeroBackground';

function Page() {
    const router = useRouter();

    // Extract unique badges from blogs data
    const uniqueBadges = [...new Set(blogs.map((blog) => blog.badge))];

    // State to manage selected filter
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    // Filtered blogs based on selected filter
    const filteredBlogs = selectedFilter
        ? blogs.filter((blog) => blog.badge === selectedFilter)
        : blogs;

    return (
        <div>
            {/* Hero Section */}
            <HeroBackground
                backgroundImage={blogBg}
                overlay={false}
                heading="Knowledge Fuels Innovation"
                subheading="Explore expert-written articles on AI, machine learning, and cutting-edge technology to inspire your journey."
            />
            <div className="container mx-auto py-16 md:py-24 px-4">
                <div className="relative w-full max-w-[1238px] mx-auto flex flex-col md:flex-row items-start justify-between text-white font-poppins">
                    {/* Left Section */}
                    <div className="w-full md:w-[60%]">
                        <h2 className="text-2xl md:text-[32px] font-bold leading-[36px] md:leading-[48px]">
                            Popular topics
                        </h2>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {uniqueBadges.map((badge, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setSelectedFilter(selectedFilter === badge ? null : badge)
                                    }
                                    className={`px-3 py-1 rounded-lg border text-xs capitalize font-medium ${
                                        selectedFilter === badge
                                            ? 'bg-[rgba(13,98,165,0.15)] text-[#0D62A5] border-[rgba(13,98,165,0.4)]'
                                            : 'bg-white/5 text-white/50 border-white/10'
                                    }`}
                                >
                                    {badge}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        className="w-full md:w-auto mt-6 md:mt-0 flex items-center gap-3 cursor-pointer flex-nowrap"
                        onClick={() => setSelectedFilter(null)}
                    >
                        <span className="text-sm capitalize">see all category</span>
                        <svg
                            width="4"
                            height="10"
                            viewBox="0 0 4 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0L4 5L0 10V0Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 mt-8">
                    {filteredBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            {...blog}
                            onClick={() => router.push(`/blogs/${blog.id}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;