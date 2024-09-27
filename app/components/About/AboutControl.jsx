"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const AboutControl = () => {
    const [isHovered, setIsHovered] = useState(false);

    const variants = {
        hidden: { opacity: 100, x: 0, scale: 1 },
        showPortfolio: {
            opacity: 1,
            x: [-10, 10, 0],
            scale: [1, 1.05, 1],
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        },
        showHireMe: {
            opacity: 1,
            x: [10, -10, 0],
            scale: [1, 1.05, 1],
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="w-full bottom-[45px] absolute z-20">
            <div className="w-full flex items-center justify-center">
                <div className="w-[367px] h-[82px] p-[10px] gap-[10px] flex items-center justify-center border-[2px] border-solid border-white bg-white bg-opacity-10 backdrop-blur-[7.5px] rounded-full">
                    <motion.div className={`${!isHovered ? "w-[208px] bg-primary border-[0.5px] border-solid border-[#D0D5DD] gap-2" : "grow basis-0"} px-5 py-[10px] flex items-center justify-center flex-shrink-0 rounded-full cursor-pointer`} variants={variants} initial="hidden" animate={!isHovered ? "showPortfolio" : "hidden"}>
                        <span className="text-[25px] text-white font-semibold tracking-[-0.385px] leading-normal select-none">
                            Portfolio
                        </span>
                        { !isHovered && (
                            <ArrowUpRightIcon width={24} height={24} className="flex-shrink-0 text-white fill-white"/>
                        ) }
                    </motion.div>
                    <motion.div className={`${isHovered ? "w-[208px] bg-primary border-[0.5px] border-solid border-[#D0D5DD] gap-2" : "grow basis-0"} px-5 py-[10px] flex items-center justify-center flex-shrink-0 rounded-full cursor-pointer`} variants={variants} initial="hidden" animate={isHovered ? "showHireMe" : "hidden"} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <span className="text-[25px] text-white font-light tracking-[-0.385px] leading-normal select-none">
                            Hire me
                        </span>
                        { isHovered && (
                            <ArrowUpRightIcon width={24} height={24} className="flex-shrink-0 text-white fill-white"/>
                        ) }
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutControl;
