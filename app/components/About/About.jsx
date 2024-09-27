"use client"

import Image from "next/image";
import { useState } from "react";

import Avatar from "@/app/assets/avatar/avatar.png"
import { AboutAnimationCover, AboutControl, AboutInfo, AboutQuote, AboutYearsExperience, HalfCircleIcon } from "@/app/components";

const About = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="about">
            <div className="w-full h-[846px]">
                <div className="w-[1080px] h-full mx-auto relative">
                    <div>
                        <AboutInfo isHovered={isHovered}/>
                        <div className="h-[636px] mt-[-56px] relative"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div className="w-full h-full relative z-10">
                                <Image src={Avatar} alt={`${Avatar}-image`} fill={true} className="object-cover" />
                            </div>
                            <div className="w-full bottom-0 absolute">
                                <div className="w-full flex items-center justify-center">
                                    <HalfCircleIcon/>
                                </div>
                            </div>
                            <AboutAnimationCover isHovered={isHovered}/>
                            <AboutControl/>
                        </div>
                    </div>
                    <AboutQuote isHovered={isHovered}/>
                    <AboutYearsExperience isHovered={isHovered}/>
                </div>
            </div>
        </section>
    );
};

export default About;