"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

import { PORTFOLIO_CARD_BACKGROUND_VARIANTS, PORTFOLIO_CARD_CONTENT_VARIANTS_HIDDEN, PORTFOLIO_CARD_CONTENT_VARIANTS_VISIBLE, PORTFOLIO_CARD_STYLES } from "@/app/constants/AnimationConstants";

const PortfolioCard = ({ imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = { backgroundImage: PORTFOLIO_CARD_STYLES.BACKGROUND_IMAGE(imageUrl), backgroundColor: PORTFOLIO_CARD_STYLES.BACKGROUND_COLOR, backgroundPosition: PORTFOLIO_CARD_STYLES.BACKGROUND_POSITION, backgroundSize: PORTFOLIO_CARD_STYLES.BACKGROUND_SIZE, backgroundRepeat: PORTFOLIO_CARD_STYLES.BACKGROUND_REPEAT, fallback: PORTFOLIO_CARD_STYLES.FALLBACK };

    return (
        <div>
            <div className="w-[633px] h-[371px] p-[10px] gap-[10px] flex items-center justify-center flex-shrink-0 rounded-[20px] cursor-pointer" style={style} onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
                <div className="flex flex-col flex-custom-100 items-start justify-between self-stretch relative">
                    <div className="gap-[10px] flex items-start justify-end self-stretch">
                        <motion.div animate={isHovered ? { backgroundColor: "#FD853A", color: "white", fill: "white" } : { backgroundColor: "transparent", color: "#FD853A" } } className="w-16 h-16 p-[15px] gap-[10px] flex items-center justify-center rounded-full border border-solid border-primary transition-all duration-300">
                            <ArrowRightIcon width={32} height={32} className="flex-custom-100 self-stretch"/>
                        </motion.div>
                    </div>
                    <motion.div initial="hidden" animate={isHovered ? "visible" : "hidden"} variants={PORTFOLIO_CARD_BACKGROUND_VARIANTS} className="gap-[25px] px-6 py-5 flex flex-col items-start self-stretch rounded-[24px]" style={ isHovered ? { backgroundColor: "rgba(0, 0, 0, 0.3)", backdropFilter: "blur(12.5px)" } : { } }>
                        <motion.div initial="hidden" animate={isHovered ? "visible" : "hidden"} variants={PORTFOLIO_CARD_CONTENT_VARIANTS_VISIBLE} className="w-[307px] h-[61px] flex flex-col justify-center">
                            <span className="text-[70px] text-[#FFFAF5] font-bold leading-normal tracking-[-1.05px]">Lirante</span>
                        </motion.div>
                        <motion.div initial="hidden" animate={isHovered ? "visible" : "hidden"} variants={PORTFOLIO_CARD_CONTENT_VARIANTS_VISIBLE} className="flex flex-col justify-center self-stretch">
                            <p className="text-[16px] text-[#FFEAD5] font-normal leading-normal line-clamp-3 tracking-[-0.24px]">Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a
                                dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci
                                elementum egestas lobortis.
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div initial="visible" animate={isHovered ? "hidden" : "visible"} variants={PORTFOLIO_CARD_CONTENT_VARIANTS_HIDDEN} className={`w-[307px] px-[20px] left-0 bottom-0 flex-col justify-center absolute z-10`}>
                        <span className="text-[70px] text-[#FFFAF5] font-bold leading-normal tracking-[-1.05px]">Lirante</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
