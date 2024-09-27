import { SendIcon } from "@/app/components";

const FooterEmail = () => {
    return (
        <div>
            <div className="gap-7 flex flex-col items-start">
                <div>
                    <span className="text-[20px] text-[#FD853A] font-semibold leading-normal tracking-[-0.3px]">
                        Get the latest information
                    </span>
                </div>
                <div className="w-[304px] flex items-center self-stretch">
                    <div className="w-[258px] h-[51px] px-[14px] py-[13px] gap-[10px] flex flex-row items-start bg-white rounded-l-[12px]">
                        <span className="text-[16px] text-black font-normal leading-normal tracking-[-0.3px]">
                            Email address
                        </span>
                    </div>
                    <div
                        className="w-[46px] h-[51px] px-[8px] py-[10px] gap-[10px] flex flex-row items-center justify-center bg-primary rounded-r-[12px]">
                        <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                            <SendIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterEmail;