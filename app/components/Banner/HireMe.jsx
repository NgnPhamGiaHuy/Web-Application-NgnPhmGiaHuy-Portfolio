"use client"

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Avatar from "@/app/assets/avatar/avatar-01.png"

import { HireMeCard } from "@/app/components";
import { CIRCLES_DIAMETER_ANIMATION } from "@/app/constants/AnimationConstants";

const HireMe = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section>
            <div className="h-[806px] px-[71px] py-[122px] gap-[96px] flex flex-col items-center justify-center flex-shrink-0 self-stretch rounded-[50px] bg-[#F2F4F7]">
                <div className="w-[1299px] h-[600px] gap-6 flex items-center justify-between flex-shrink-0">
                    <div className="w-[603px] h-[600px] flex-shrink-0 relative cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <motion.div className="w-[603px] h-[600px] flex-shrink-0 relative z-10" animate={ isHovered ? { x: 0, y: 80 } : { x : 0, y: 0 }} transition={{ duration: 0.3 }}>
                            <Image src={Avatar} alt={`${Avatar}-image`} fill={true} className="w-full h-full object-cover"/>
                        </motion.div>
                        { CIRCLES_DIAMETER_ANIMATION.map((value, index) => (
                            <div className="inset-0 flex items-center justify-center absolute">
                                <motion.div key={-index} animate={ isHovered ? { width: value.diameterScale, height: value.diameterScale, borderWidth: 1 + index } :{ width: value.diameter, height: value.diameter, borderWidth: 1 }} transition={{ duration: 0.4 }} className="rounded-full border border-solid border-primary flex-shrink-0"></motion.div>
                            </div>
                        )) }
                    </div>
                    <div className="gap-[47px] flex flex-col flex-custom-100 items-start z-10">
                        <div className="gap-[20px] flex flex-col items-start self-stretch">
                            <div>
                                <span className="text-[64px] font-medium leading-[100%] tracking-[-0.96px]">
                                    Why <span className="text-primary">Hire me</span> ?
                                </span>
                            </div>
                        </div>
                        <div className="w-[444px]">
                            <p className="text-[20px] text-[#98A2B3] font-normal leading-normal tracking-[-0.3px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
                            </p>
                        </div>
                        <div className="gap-[10px] flex items-start self-stretch">
                            <HireMeCard number={450} title={"Project Completed"} />
                            <HireMeCard number={450} title={"Project Completed"} />
                        </div>
                        <div className="px-[59px] py-[33px] gap-[10px] flex items-center justify-center rounded-[32px] border border-solid border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                            <div>
                                <span className="text-[32px] font-semibold leading-normal tracking-[-0.48px]">
                                    Hire me
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireMe;