"use client";

import { MotionList } from "@/app/components";

const FooterNavigation = () => {
    return (
        <div>
            <div className="gap-7 flex flex-col items-start">
                <div>
                    <span className="text-[20px] text-[#FD853A] font-semibold leading-normal tracking-[-0.3px]">
                        Navigation
                    </span>
                </div>
                <div className="gap-5 flex flex-col items-start">
                    { ["Home", "About Us", "Service", "Resume", "Project"].map((value, index) => (
                        <MotionList value={value} key={index} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default FooterNavigation;