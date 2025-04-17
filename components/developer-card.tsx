import { DeveloperCardProps } from "@/types";
import Image from "next/image";


export function DeveloperCard({ image, title, description, titleClassName, descriptionClassName }: DeveloperCardProps) {
    return (
        <div className="bg-[#148BE721] dark:bg-[#101215] p-6 rounded-lg text-center h-[300px] flex justify-center items-center flex-col border-[0.75px] border-[#148BE721]">
            <div className="w-12 h-12 rounded-full text-xs font-normal flex items-center justify-center mb-4 mx-auto">
                <Image src={image} alt={title} width={110} height={110} />
            </div>
            <h3 className={`text-[#188EF8] dark:text-white text-3xl font-semibold ${titleClassName || ""}`}>
                {title}
            </h3>
            <p className={`dark:text-[#FFFFFF] text-[#333333] text-base opacity-50 ${descriptionClassName || ""}`}>
                {description}
            </p>
        </div>
    );
}