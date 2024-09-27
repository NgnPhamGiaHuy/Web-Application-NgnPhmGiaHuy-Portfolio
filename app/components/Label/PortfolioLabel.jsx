"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const PortfolioLabel = ({ label }) => {
        const [isHovered, setIsHovered] = useState(false);

        const variants = {
            initial: {
                y: 0,
                color: "black",
                transition: {
                    color: { duration: 0.4 },
                    backgroundColor: { duration: 0.3 },
                    y: { duration: 0.3 }
                }
            },
            isHovered: {
                y: -10,
                color: "white",
                backgroundColor: "#FD853A",
                transition: {
                    color: { duration: 0.2 },
                    backgroundColor: { duration: 0.3 },
                    y: { duration: 0.4 }
                }
            }
        }

        return (
            <div>
                <motion.div variants={variants} initial={"initial"} animate={ isHovered ? "isHovered": "initial"} className="px-8 py-[15px] gap-[10px] flex items-center justify-center bg-[#F2F4F7] rounded-[24px] cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <span className="text-[20px] font-normal leading-normal">
                    { label }
                </span>
                </motion.div>
            </div>
        )
    }
;

export default PortfolioLabel;