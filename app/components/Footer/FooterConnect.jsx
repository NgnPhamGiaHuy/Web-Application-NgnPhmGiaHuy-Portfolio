import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const FooterConnect = () => {
    return (
        <>
            <div className="flex items-center justify-between self-stretch">
                <div className="w-[643px] h-[150px] flex flex-col justify-center">
                    <span className="text-[64px] text-[#FCFCFD] font-semibold leading-normal tracking-[-0.96px]">
                        Lets Connect there
                    </span>
                </div>
                <div className="w-[202px] px-5 py-[10px] flex items-center justify-center rounded-[60px] bg-primary">
                    <div>
                        <span className="text-[25px] text-white font-medium leading-normal tracking-[-0.385px]">
                            Hire me
                        </span>
                    </div>
                    <ArrowUpRightIcon width={24} height={24} className="flex-shrink-0 text-white fill-white"/>
                </div>
            </div>
        </>
    );
};

export default FooterConnect;