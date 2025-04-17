"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";



export function CTA() {
    const router = useRouter()
   
    return (
        <div className="bg-gradient-to-l from-[#148BE70F] to-white dark:bg-gradient-to-l dark:from-[#0d63a555] dark:to-black flex py-12 h-[400px] px-6 md:px-12 border-b dark:border-gray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-0 md:z-10">
                <div className="max-w-lg mb-8 md:mb-0">
                    <h2 className="text-[#188EF8] dark:text-white text-3xl md:text-4xl font-bold mb-4 ">Start Your Coding Journey Today</h2>
                    <p className="text-[#333333] dark:text-gray-300 mb-6">
                    Don’t wait to transform your career! Enroll in a course or book a mentorship session now.
                    </p>
                    <Button
                      onClick={()=>router.push("/contact")}
                        className="inline-flex items-center justify-center px-20 py-6 hover:bg-blue-700 transition-colors rounded-md font-semibold text-white bg-[#148BE7] dark:bg-gradient-to-r from-[#0D62A5] to-[#0A385B] duration-300 "
                    >
                        Enroll Now
                    </Button>
                </div>
            </div>
            <div className="hidden md:block right-0 top-0 bottom-0 w-1/2 z-30">
                <div className="absolute right-24 top-0 bottom-0 w-1/2 z-0 ">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[633px] h-[633px] rounded-full bg-[#148BE7] dark:bg-[#0D62A5] opacity-10"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[542px] h-[542px] rounded-full bg-[#148BE7] dark:bg-[#0D62A5] opacity-20"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[440px] h-[440px] rounded-full bg-[#148BE7] dark:bg-[#0D62A5] opacity-40"></div>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/3 w-[306px] h-[306px] rounded-full bg-[#148BE7] dark:bg-[#0D62A5] opacity-60"></div>
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-1/3 w-[169px] h-[169px] rounded-full bg-[#148BE7] dark:bg-[#0D62A5] opacity-80">
                        <Image
                            src={logo || "/placeholder.svg"}
                            alt="Company Logo"
                            width={180}
                            height={180}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}