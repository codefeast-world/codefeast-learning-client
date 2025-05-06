import React from "react";
import Image from "next/image";
import { BlogCardProps } from "@/types";

const BlogCard: React.FC<BlogCardProps> = ({ badge, title, author, authorImage, date, thumbnail, onClick }) => {
  return (
    <div
      className="group relative w-full max-w-sm h-96 rounded-lg border border-white/10 overflow-hidden bg-gray-800 hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
        {/* Badge */}
        <div className="inline-block px-3 py-1 border border-blue-500/40 rounded-full text-blue-500 text-sm font-medium w-fit">
          {badge}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-lg font-semibold text-white leading-snug line-clamp-3">
          {title}
        </h3>

        {/* Author and Date */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <Image
              src={authorImage}
              alt={author}
              width={24}
              height={24}
              className="rounded-full object-cover"
              unoptimized
            />
            <p className="text-gray-400 text-sm font-medium">{author}</p>
          </div>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;