import Image from "next/image";
import {StarIcon} from "@heroicons/react/24/solid";

const ReviewCard = ({ imageUrl }) => {
    const numberOfStars = 5;

    return (
        <div>
            <div className="p-[21px] gap-[14px] flex flex-col items-start rounded-[24px] bg-white bg-opacity-15 backdrop-blur-[7px] hover:outline hover:outline-solid hover:outline-white transition-all duration-200 relative">
                <div className="gap-3 flex items-start">
                    <div className="w-[54px] h-[54px] flex items-center justify-center rounded-full overflow-hidden relative">
                        <Image src={imageUrl} alt={`${imageUrl}-image`} fill={true} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col items-start self-stretch">
                        <div>
                            <span className="text-[24px] text-center text-[#FCFCFD] font-bold block leading-tight">
                                Jayesh Patil
                            </span>
                        </div>
                        <div>
                            <span className="text-[18px] text-center text-[#FCFCFD] font-normal block leading-tight">
                                CEO, Lirante
                            </span>
                        </div>
                    </div>
                </div>
                <div className="gap-1 flex items-center">
                    <div className="flex items-center">
                        { Array.from({ length: numberOfStars }).map((_, index) => (
                            <div key={index} className="w-8 h-8 p-[3px] flex items-center">
                                <StarIcon className="text-primary fill-primary" width={32} height={32}/>
                            </div>
                        )) }
                    </div>
                    <div>
                        <span className="text-[25px] text-[#FCFCFD] font-medium leading-normal tracking-[-0.385px]">
                            5.0
                        </span>
                    </div>
                </div>
                <div className="w-[742px] h-[106px] flex flex-col justify-center">
                    <p className="text-[20px] text-[#F9FAFB] font-normal leading-normal tracking-[-0.3px]">
                        consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                    </p>
                </div>
                <div className="top-[12px] right-[14px] absolute">
                    <div className="w-[128px] h-[128px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 129" fill="none">
                            <path d="M84.8532 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2266 104.134C87.4666 105.201 86.8799 107.441 87.9466 109.254C89.0132 111.014 91.2532 111.601 93.0666 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9066C75.5199 17.0942 68.4266 24.1876 68.4266 33.5742V49.5742C68.3732 58.9609 75.4666 66.0542 84.8532 66.0542Z" fill="#667085" fillOpacity="0.3"/>
                            <path d="M27.1466 66.0542H52.16C51.7333 90.9609 46.8266 95.0676 31.52 104.134C29.76 105.201 29.1733 107.441 30.24 109.254C31.3066 111.014 33.5466 111.601 35.36 110.534C53.3866 99.8676 59.68 93.3609 59.68 62.3209V33.5742C59.68 24.4542 52.2666 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6666 24.1876 10.6666 33.5742V49.5742C10.6666 58.9609 17.76 66.0542 27.1466 66.0542Z" fill="#667085" fillOpacity="0.3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;