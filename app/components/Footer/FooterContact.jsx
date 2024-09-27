"use client";

import { MotionList } from "@/app/components";

const FooterContact = () => {
    return (
        <div>
            <div className="gap-7 flex flex-col items-start">
                <div>
                    <span className="text-[20px] text-[#FD853A] font-semibold leading-normal tracking-[-0.3px]">
                        Contact
                    </span>
                </div>
                <div className="gap-5 flex flex-col items-start">
                    {["+84 969122412", "yuh.nguyenpham@gmail.com", "NgnPhmGiaHuy.com"].map((value, index) => (
                        <MotionList value={value} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterContact;