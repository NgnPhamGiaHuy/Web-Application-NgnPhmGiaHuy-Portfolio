import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const ArrowUpRightCircleIcon = () => {
    return (
        <div>
            <div className="w-[114px] h-[114px] right-0 bottom-0 p-[21px] gap-[10px] flex items-center justify-center rounded-[57px] bg-[#1D2939] group-hover:bg-primary transition-all duration-300 cursor-pointer absolute z-10">
                <ArrowUpRightIcon width={64} height={64} className="text-white fill-white"/>
            </div>
        </div>
    );
};

export default ArrowUpRightCircleIcon;