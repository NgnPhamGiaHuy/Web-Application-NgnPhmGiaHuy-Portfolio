"use client"

import Link from "next/link";
import { scroller } from "react-scroll";

const NavigationCard = ({ link = "/", title, active = false }) => {
    const handleScroll = () => {
        const targetSection = link.replace('#', '');
        scroller.scrollTo(targetSection, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div className="cursor-pointer" onClick={handleScroll}>
            <div className={`${active ? "bg-primary" : "hover:bg-white hover:bg-opacity-10"} px-10 py-5 rounded-[60px] transition-all`}>
                <Link href={link}>
                    <span className="text-[20px] text-white font-bold">
                        { title }
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default NavigationCard;