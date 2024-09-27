"use client"

import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";

import Project from "@/app/assets/project/project-01.jpeg";
import { PortfolioCard, PortfolioLabel, TextButton } from "@/app/components";

const Dot = ({ active = false }) => {
    return (
        <div className={`${active ? "w-[60px] bg-primary" : "w-[16px] bg-[#E4E7EC]"} h-[16px] rounded-[20px]`}></div>
    )
}


const Portfolio = () => {
    return (
        <section>
            <div className="px-[71px] py-[97px] gap-12 flex flex-col items-center self-stretch">
                <div className="w-[1298px] flex items-center justify-between">
                    <div className="w-[643px] h-[150px] flex flex-col justify-center flex-shrink-0">
                        <span className="text-[64px] text-[#344054] font-medium leading-[1.25] tracking-[-0.96px]">
                            Lets have a look at <br/> my <span className="text-primary leading-[1.25]">Portfolio</span>
                        </span>
                    </div>
                    <TextButton label={"See All"}/>
                </div>
                <div className="gap-12 flex flex-col items-center">
                    <div className="gap-12 flex flex-col items-center">
                        <div className="flex items-center group relative">
                            <div className="w-[1290px] gap-6 flex flex-wrap items-center content-center">
                                <PortfolioCard imageUrl={Project.src}/>
                                <PortfolioCard imageUrl={Project.src}/>
                            </div>
                            {/*<div className="w-[76px] h-[76px] p-[21px] left-[-42px] top-[147px] hidden group-hover:flex items-center justify-center rounded-[60px] border-2 border-solid border-white bg-primary absolute cursor-pointer">*/}
                            {/*    <ArrowLeftIcon width={48} height={48} className="text-white fill-white" />*/}
                            {/*</div>*/}
                            {/*<div className="w-[76px] h-[76px] p-[21px] right-[-36px] top-[147px] hidden group-hover:flex items-center justify-center rounded-[60px] border-2 border-solid border-white bg-primary absolute cursor-pointer">*/}
                            {/*    <ArrowRightIcon width={48} height={48} className="text-white fill-white" />*/}
                            {/*</div>*/}
                        </div>
                        <div className="gap-[11px] flex items-start">
                            <Dot active={true} />
                            <Dot />
                        </div>
                    </div>
                    <div className="gap-[14px] flex items-start">
                        {["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"].map((value, index) => (
                            <PortfolioLabel key={index} label={value}/>
                        ))}
                    </div>
                    <div className="gap-6 flex flex-col items-start">
                        <div className="gap-[18px] flex items-center">
                            <div>
                                <span className="text-[48px] text-[#344054] font-bold leading-normal tracking-[-0.72px]">
                                    Lirante - Food Dilvery Solution
                                </span>
                            </div>
                            <div className="w-[58px] h-[58px] p-[12px] gap-[10px] flex items-center justify-center rounded-full bg-primary">
                                <ArrowUpRightIcon width={34} height={34} className="flex-custom-100 text-white fill-white self-stretch" />
                            </div>
                        </div>
                        <div className="w-[742px] h-[61px] flex flex-col justify-center">
                            <p className="text-[20px] text-[#344054] text-center font-normal leading-normal tracking-[-0.3px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;