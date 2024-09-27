import { ArrowUpRightCircleIcon, Frame01 } from "@/app/components";
import Frame from "@/app/assets/frame/frame-01.png";
import Project01 from "@/app/assets/project/project-01.jpeg";

const Service = () => {
    return (
        <section id="service">
            <div className="h-[878px] px-[71px] py-[116px] gap-[96px] flex flex-col flex-shrink-0 items-center self-stretch rounded-[50px] bg-lightgray bg-cover bg-no-repeat bg-center overflow-hidden relative" style={{ backgroundImage: `url(${Frame.src })`, backgroundColor: "#171717"}}>
                <div className="w-[1299px] flex items-end justify-between">
                    <div>
                        <span className="text-[48px] text-white font-medium leading-[100%] tracking-[-0.72px]">
                            My <span className="text-primary">Service</span>
                        </span>
                    </div>
                    <div className="w-[576px]">
                        <span className="text-[20px] text-white font-normal leading-normal tracking-[-0.3px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
                        </span>
                    </div>
                </div>
                <div className="gap-[39px] flex flex-col items-center">
                    <div className="w-[1299px] flex items-start justify-between">
                        <div className="gap-[10px] flex items-end justify-end relative">
                            <div className="w-[416px] h-[508px] relative">
                                <div className="w-full h-full flex-shrink-0 fill-[rgba(104,104,104,0.2)] stroke-2 stroke-[rgba(255,255,255,0)] backdrop-blur-[7.5px]">
                                    <Frame01 />
                                </div>
                                <div className="flex flex-col items-center justify-end absolute inset-0">
                                    <div className="w-[328px] h-[329px] mb-[-310px] rounded-[35px] bg-[#757575] opacity-50 z-[1]"></div>
                                    <div className="w-[374px] h-[329px] mb-[-310px] rounded-[35px] bg-[#9E9D9D] opacity-50 z-[2]"></div>
                                    <div className="w-[416px] h-[307px] rounded-[35px] bg-lightgray bg-cover bg-no-repeat bg-center z-[3]" style={{ backgroundImage: `url(${Project01.src })` }}></div>
                                </div>
                                <div className="w-full gap-[23px] flex flex-col items-start">
                                    <div className="px-[37px] flex items-start self-stretch">
                                        <span className="text-[32px] text-white font-medium leading-normal tracking-[-0.48px]">
                                            UI/ UX Design
                                        </span>
                                    </div>
                                    <div className="w-full h-[2px] bg-white"></div>
                                </div>
                            </div>
                            <ArrowUpRightCircleIcon/>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Service;