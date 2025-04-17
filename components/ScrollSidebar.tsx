import React from "react";
import {  SidebarProps } from "@/types";



export const ScrollSidebar: React.FC<SidebarProps> = ({ tags, activeTag, setActiveTag, scrollToSection, sections }) => {
    return (
        <section className="w-full md:w-[360px] px-6">
            <div
                className="w-full rounded-2xl border-none md:border md:border-gray-800 overflow-hidden backdrop-blur-xl"
                style={{
                    background: "linear-gradient(180deg, rgba(38, 38, 39, 0.3) 0%, rgba(44, 45, 48, 0.3) 100%)",
                }}
            >
                <div className="p-4 space-y-1 text-sm">
                    {tags.map((tag) => (
                        <div key={tag} className="relative text-sm">
                            <button
                                onClick={() => {
                                    setActiveTag(tag);
                                    scrollToSection(sections.find((s) => s.tag === tag)?.id || "");
                                }}
                                className={`relative py-4 px-6 w-full text-left transition-colors font-['IBM Plex Sans'] ${
                                    tag === activeTag
                                        ? "text-[#3B82F6]" // Active tag color
                                        : "text-white text-opacity-60 hover:text-opacity-100" // Unselected tag color
                                }`}
                            >
                                {/* Left Line */}
                                <div
                                    className={`absolute left-0 top-0 bottom-0 w-1 ${
                                        tag === activeTag ? "bg-[#3B82F6]" : "bg-gray-600"
                                    }`}
                                ></div>
                                {tag}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};