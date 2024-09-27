"use client"

import { useConvertToBase64 } from "@/app/hooks";
import { ArrowUpRightCircleIcon } from "@/app/components";

const BlogCard = ({ imageUrl }) => {
    const base64Image = useConvertToBase64(imageUrl);

    return (
        <div>
            <div className="gap-[35px] flex flex-col items-start">
                <div className="gap-[10px] flex items-start shadow-[0px_4px_55px_0px_rgba(0_0_0_0.05)] group relative">
                    <div className="w-[416px] h-[432px] cursor-pointer">
                        <div className="w-full h-full flex-shrink-0 fill-[#3C3C3C]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="417" height="433" viewBox="0 0 417 433" fill="none">
                                <path d="M0.5 37.081C0.5 16.6465 17.0655 0.0810547 37.5 0.0810547H379.5C399.935 0.0810547 416.5 16.6465 416.5 37.0811V282.404C416.5 302.838 399.935 319.404 379.5 319.404H356.736C318.149 319.404 287.062 351.048 287.746 389.628L287.832 394.424C288.199 415.113 271.529 432.081 250.837 432.081H37.5C17.0655 432.081 0.5 415.516 0.5 395.081V37.081Z" fill="url(#pattern0_219_456)"/>
                                <defs>
                                    <pattern id="pattern0_219_456" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#image0_219_456" transform="matrix(0.00245499 0 0 0.00236407 -0.192308 0)"/>
                                    </pattern>
                                    <image id="image0_219_456" width="564" height="423" href={base64Image} preserveAspectRatio="xMidYMid slice"/>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <ArrowUpRightCircleIcon/>
                </div>
                <div className="px-8 py-4 gap-[10px] flex items-center justify-center rounded-[24px] bg-[#F2F4F7]">
                    <span className="text-[20px] text-black font-normal leading-normal">
                        UI/ UX Design
                    </span>
                </div>
                <div className="gap-[35px] flex items-start">
                    <div className="gap-[10px] flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div>
                            <span className="text-[20px] text-[#344054] font-normal leading-normal">
                                Jayesh Patil
                            </span>
                        </div>
                    </div>
                    <div className="gap-[10px] flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div>
                            <span className="text-[20px] text-[#344054] font-normal leading-normal">
                                10 Nov, 2023
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-[416px]">
                    <span className="text-[32px] text-[#344054] font-normal leading-normal">
                        Design Unraveled: Behind <br/> the Scenes of UI/UX Magic
                    </span>
                </div>
            </div>
        </div>
    )
};

export default BlogCard;