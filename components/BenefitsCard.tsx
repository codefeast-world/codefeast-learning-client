import { BenefitCardProps } from "@/types";
import Image from "next/image";

export function BenefitCard({ image, title }: BenefitCardProps) {
    return (
        <div className="bg-[#148BE721] dark:bg-[#101215] p-6 rounded-lg text-center  border-[0.75px] border-[#148BE721]">
            <div className="w-12 h-12 rounded-full text-xs font-normal flex items-center justify-center mb-4 mx-auto">
                <Image src={image} alt={title} width={33} height={33} />
            </div>
            <h3 className="text-sm dark:text-[#FFFFFF] text-[#333333]">{title}</h3>
        </div>
    );
}