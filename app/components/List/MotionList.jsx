"use client";

import { motion } from "framer-motion";

const MotionList = ({ value }) => {
    return (
        <div>
            <motion.div className="relative cursor-pointer" initial="rest" whileHover="hover" animate="rest">
                <motion.span className="text-[16px] text-[#FCFCFD] font-normal leading-normal tracking-[-0.3px]">
                    {value}
                </motion.span>
                <motion.div className="absolute bottom-0 left-0 h-[1px] bg-white" variants={{rest: {width: 0}, hover: {width: "100%"}}} transition={{duration: 0.4, ease: "easeInOut"}}/>
            </motion.div>
        </div>
    );
};

export default MotionList;