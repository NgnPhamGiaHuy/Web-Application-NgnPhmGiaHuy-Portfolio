import { StarIcon } from "@heroicons/react/24/solid";

const SkillCarouselCard = ({ label }) => {
    return (
        <div className="gap-4 h-[80px] flex flex-row items-center">
            <div>
                <span className="text-[48px] text-black whitespace-nowrap font-normal leading-normal tracking-[-0.72px]">
                    { label }
                </span>
            </div>
            <div className="w-[34px] h-[34px]">
                <StarIcon width={34} height={34} className="text-primary fill-primary" />
            </div>
        </div>
    );
};

export default SkillCarouselCard;