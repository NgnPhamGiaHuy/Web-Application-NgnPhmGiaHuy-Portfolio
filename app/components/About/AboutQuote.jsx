"use client";

import { motion } from "framer-motion";
import QuoteUp from "@/app/assets/vector/quote-up.svg";

import { USER_INFORMATION } from "@/app/constants";

const AboutQuote = ({ isHovered }) => {
    return (
        <>
            <motion.div className="absolute top-1/2 left-[-82px]" animate={isHovered ? { y: -232 } : { y: 0 }} transition={{ duration: 0.3 }}>
                <div className="flex flex-col items-start gap-6">
                    <QuoteUp />
                    <div>
                        <span
                            className="text-[20px] text-[#344054] text-left font-medium tracking-[-1.5%]"
                            dangerouslySetInnerHTML={{ __html: USER_INFORMATION.quote }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default AboutQuote;