"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const Logo = ({ logoText = "NG", shortName = "NPGH", fullName = "NgPhm Gia Huy", justifyContent = "center", paddingTop = 20, paddingRight = 40, paddingBottom = 20, paddingLeft = 40 }) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        justifyContent: justifyContent,
        paddingTop: `${paddingTop}px`,
        paddingRight: `${paddingRight}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`
    };

    return (
        <motion.div className="min-w-[307px] w-[307px] h-[86px] flex items-center select-none" style={style} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} whileHover={{ scale: 1.05 }} >
            <div className="flex flex-row items-center gap-[10px]">
                <motion.div className="w-[46px] h-[46px] flex items-center justify-center rounded-full bg-primary" animate={{ x: isHovered ? -4 : 0 }} transition={{ duration: 1.5 }}>
                    <span className="text-[20px] text-white font-bold tracking-[-0.25rem]">
                        { logoText }
                    </span>
                </motion.div>
                { !isHovered && (
                    <motion.div className="ml-[-0.25rem]" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <span className="text-[20px] text-white text-center font-bold">
                            { shortName }
                        </span>
                    </motion.div>
                ) }
                { isHovered && (
                    <motion.div className="ml-[-0.25rem] leading-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
                        <div>
                            <span className="text-[14px] text-[#98A2B3] font-normal tracking-[-1.5%]">
                                Made by
                            </span>
                        </div>
                        <div>
                            <h3 className="text-[20px] text-white font-semibold tracking-[-1.5%]">
                                { fullName }
                            </h3>
                        </div>
                    </motion.div>
                ) }
            </div>
        </motion.div>
    );
};

export default Logo;