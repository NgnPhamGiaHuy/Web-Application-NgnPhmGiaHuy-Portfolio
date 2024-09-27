"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { SkillCarouselCard } from "@/app/components";

const SkillCarousel = () => {
    const skillLabels = ["UX Design", "App Design", "Dashboard", "Wireframe", "User Research"];

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        let duplicatedSkills = [...skillLabels];
        while (duplicatedSkills.length < 7) {
            duplicatedSkills = [...duplicatedSkills, ...skillLabels];
        }
        setSkills(duplicatedSkills);
    }, []);

    const marqueeVariants = {
        animate: {
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                }
            }
        }
    };

    return (
        <div className="w-full h-[147px] flex items-center justify-end flex-shrink-0 rounded-[24px] bg-primary overflow-hidden">
            <div className="relative w-full h-[80px] bg-white rotate-[-1.2deg]">
                <motion.div className="absolute flex items-center gap-[15px] w-[200%]" variants={marqueeVariants} animate="animate">
                    {skills?.map((value, index) => (
                        <SkillCarouselCard key={index} label={value} />
                    ))}
                    {skills?.map((value, index) => (
                        <SkillCarouselCard key={`duplicate-${index}`} label={value} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SkillCarousel;
