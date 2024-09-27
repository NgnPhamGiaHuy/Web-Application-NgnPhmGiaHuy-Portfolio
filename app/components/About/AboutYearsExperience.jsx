"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

import { USER_INFORMATION } from "@/app/constants";

const AboutYearsExperience = ({ isHovered }) => {
    const numberOfStars = 5;

    return (
        <>
            <motion.div className="absolute right-[-82px] top-1/2" animate={isHovered ? { y: -232 } : { y: 0 }} transition={{ duration: 0.3 }}>
                <div className="flex flex-col items-end gap-[21px]">
                    <div className="flex flex-row items-start justify-center">
                        { Array.from({ length: numberOfStars }).map((_, index) => (
                            <div key={index} className="w-8 h-8 p-[3px] flex items-center">
                                <StarIcon className="text-primary fill-primary" width={32} height={32}/>
                            </div>
                        )) }
                    </div>
                    <div className="flex flex-col items-end gap-[5px]">
                        <div>
                            <span className="text-[47px] text-accent text-center font-bold tracking-[-1.5%] leading-[100%]">
                                { USER_INFORMATION.years_experience } Years
                            </span>
                        </div>
                        <div>
                            <span className="text-[20px] text-accent text-center font-normal tracking-[-1.5%] leading-[100%]">
                                Experience
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default AboutYearsExperience;