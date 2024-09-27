const WorkCard = ({ title, subtitle }) => {
    return (
        <div>
            <div className="min-h-[132px] gap-[14px] flex flex-col items-start">
                <div>
                    <span className="text-[40px] text-[#344054] font-semibold leading-[100%] tracking-[-0.6px]">
                        { title }
                    </span>
                </div>
                { subtitle && (
                    <div>
                        <span className="max-w-[444px] w-[444px] text-[24px] text-[#98A2B3] font-normal line-clamp-3 leading-[100%] tracking-[-0.36px]">
                            { subtitle }
                        </span>
                    </div>
                ) }
            </div>
        </div>
    )
};

export default WorkCard;