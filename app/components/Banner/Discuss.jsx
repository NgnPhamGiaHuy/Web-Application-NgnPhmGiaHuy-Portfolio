import { EnvelopeIcon } from "@heroicons/react/16/solid";

import { AwardIcon, MoveStarIcon, ShieldTickIcon } from "@/app/components";

const DiscussLabel = ({ IconComponent, label }) => {
    return (
        <div>
            <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center">
                    <IconComponent/>
                </div>
                <div>
                    <span className="text-[16px] text-black font-normal leading-normal tracking-[-0.24px]">
                        { label }
                    </span>
                </div>
            </div>
        </div>
    )
}

const Discuss = () => {
    return (
        <section>
            <div className="py-[98px] gap-[10px] flex flex-col items-center justify-center self-stretch">
                <div className="w-[799px] h-[150px] flex flex-col justify-center">
                   <span className="text-[64px] text-[#344054] text-center font-semibold leading-normal tracking-[-0.96px]">
                       Have an Awsome Project Idea? <span className="text-primary">Let’s Discuss</span>
                   </span>
                </div>
                <div className="gap-[10px] flex flex-col items-center justify-center">
                    <div className="w-[832px] h-[86px] p-[14px] flex items-center justify-between rounded-[50px] border border-solid border-[#E4E7EC] backdrop-filter-[7.5px]">
                        <div className="gap-[17px] flex items-center flex-shrink-0 self-stretch">
                            <div className="w-[58px] h-[58px] gap-[10px] inline-flex items-center justify-center rounded-full bg-[#FFEAD5]">
                                <div className="w-[32px] h-[32px] flex items-center justify-center">
                                    <EnvelopeIcon width={32} height={32} className="text-primary fill-primary"/>
                                </div>
                            </div>
                            <div className="w-[580px]">
                                <input type="text" placeholder="Enter Email Address" className="w-full text-[20px] text-black font-medium outline-none bg-transparent leading-normal tracking-[-0.3px]"/>
                            </div>
                        </div>
                        <div className="gap-[10px] px-10 py-5 flex items-center justify-center rounded-[60px] cursor-pointer bg-primary">
                            <span className="text-[20px] text-white font-medium leading-normal tracking-[-0.3px]">
                                Send
                            </span>
                        </div>
                    </div>
                    <div className="w-[770px] flex items-center justify-between">
                        <DiscussLabel IconComponent={MoveStarIcon} label={"4.9/5 Average Ratings"}/>
                        <DiscussLabel IconComponent={AwardIcon} label={"25+ Winning Awards"}/>
                        <DiscussLabel IconComponent={ShieldTickIcon} label={"Certified Product Designer"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discuss;