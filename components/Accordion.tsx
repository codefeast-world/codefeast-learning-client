import { AccordionItemProps } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div
      className={`mb-4 rounded-lg overflow-hidden border-[1px] border-[#FFFFFF1A] transition-all duration-300 ${
        isOpen
          ? "bg-gradient-to-r from-[#148BE7] to-[#125A93]"
          : "bg-[#148BE721] dark:bg-gradient-to-b from-[#141414] to-black"
      }`}
    >
      <div className="flex justify-between items-center p-5 cursor-pointer" onClick={onClick}>
        <h3
          className={`font-normal text-xl transition-all duration-300 ${
            isOpen ? "text-white" : "text-[#333333] opacity-60 dark:text-white"
          }`}
        >
          {title}
        </h3>
        {isOpen ? <ChevronUp className="h-6 w-6 text-white" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0">
          <div className="text-white">{content}</div>
        </div>
      </motion.div>
    </div>
  );
};