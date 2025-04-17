import Image from "next/image"
import companyData from "@/constants/clients.json"

export function Clients() {
    return (
        <div className="dark:bg-gradient-to-b from-[hsl(220,23%,5%)] to-[hsl(220,23%,7%)] border-b">
            <div className="py-8 pb-0 bg-[white] dark:bg-transparent">
                <div className="max-w-[80%] mx-auto">
                    <h2 className="text-[#188EF8] dark:text-white text-2xl md:text-3xl font-bold mb-1">
                    You Deserve the Best                   </h2>
                    <p className="text-[#333333] dark:text-gray-300 text-sm md:text-base mb-8">
                    Our courses are designed and taught by the alumni of                 </p>
                </div>
            </div>
            <div className="h-20 pt-0 pb-8 gap-5 border-none  dark:bg-transparent flex items-center">
                <div className=" w-[80%] mx-auto flex items-center justify-between dark:bg-transparent">
                    {companyData.map((company, index) => (
                        <div key={index} className="h-12 relative flex items-center">
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={96}
                                height={32}
                                className="object-contain invert dark:invert-0 w-28"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
