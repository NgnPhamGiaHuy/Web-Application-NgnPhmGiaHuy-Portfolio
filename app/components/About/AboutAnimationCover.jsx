"use client";

import { motion } from "framer-motion";

import { ABOUT_ANIMATION_COVER } from "@/app/constants/AnimationConstants";

const AboutAnimationCover = ({ isHovered }) => {
    return (
        <div className="w-full h-full left-0 top-0 absolute">
            <div className="w-full h-full relative">
                { ABOUT_ANIMATION_COVER.map(({ Component, className, animatePos }, index) => (
                    <motion.div key={index} className={`${className} absolute`} animate={isHovered ? { x: 0, y: 0 } : animatePos} transition={{ duration: 0.4 }}>
                        <Component />
                    </motion.div>
                )) }
            </div>
        </div>
    );
};

export default AboutAnimationCover;