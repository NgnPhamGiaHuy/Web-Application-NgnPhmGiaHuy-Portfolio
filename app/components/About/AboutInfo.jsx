"use client";

import { motion } from "framer-motion";

import { USER_INFORMATION } from "@/app/constants";

import Vector01 from "@/app/assets/vector/vector-01.svg";
import Vector02 from "@/app/assets/vector/vector-02.svg";

const AboutInfo = ({ isHovered }) => {
    return (
        <motion.div animate={ isHovered ? { y: 30, opacity: 0 } : { y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
            <div className="mt-[36px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="h-[64px] mb-[10px] flex items-end relative">
                        <div className="absolute top-0 -right-1/3">
                            <Vector01 className="w-fit h-fit"/>
                        </div>
                        <div className="w-[102px] h-[45px] px-6 py-3 flex items-center justify-center border-2 border-solid border-accent rounded-full overflow-hidden relative">
                            <span className="text-[20px] text-center text-accent font-medium leading-5">
                                Hello!
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-[96px] text-center font-semibold tracking-[1.5%] leading-[100%]">
                                I'm <span className="text-primary">{ USER_INFORMATION.lastname }</span>,
                                <br/>
                                { USER_INFORMATION.job_title }
                            </span>
                        </div>
                        <Vector02 className="-left-[8%] -bottom-1/4 absolute"/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutInfo;