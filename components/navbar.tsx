"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Image from "next/image"
import logo from "@/public/assets/logo.png"
import { useRouter, usePathname } from "next/navigation"
import navLinks from '@/constants/navbar-links.json'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    const pathname = usePathname();
    
    return (
        <div className="fixed md:top-5 top-0 md:left-1/2 transform md:-translate-x-1/2 md:w-[80%] w-[100vw] md:rounded-xl bg-[#148BE74D] dark:bg-[#148BE721] md:bg-[#148BE71A] md:dark:bg-[#FFFFFF08] backdrop-blur-[45px] border-[0.75px] border-[#148BE721] dark:border-[#FFFFFF21] z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-blue-500" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </Button>
                    </div>
                    <Link href="/" className="flex items-center">
                        <Image alt="logo" width={150} height={150} src={logo || "/placeholder.svg"} />
                    </Link>
                </div>

                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-6">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-normal text-[#333333] dark:text-white hover:text-gray-300"
                                    >
                                        {link.label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center space-x-4">
                    <Button
                        onClick={() => {
                            if (pathname === "/contact") {
                                router.push("/");
                            } else {
                                router.push("/contact");
                            }
                        }}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                        Enroll Now
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#148BE74D] dark:bg-[#148BE721] backdrop-blur-[45px] border-t-[0.75px] border-[#148BE721] dark:border-[#FFFFFF21]">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col space-y-4 p-4">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-normal text-[#333333] dark:text-white hover:text-gray-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            )}
        </div>
    )
}