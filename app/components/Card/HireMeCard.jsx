const HireMeCard = ({ number, title }) => {
    return (
        <>
            <div className="gap-[10px] flex flex-col flex-custom-100 items-start">
                <div>
                    <span className="text-[36px] text-[#1D2939] font-medium leading-normal tracking-[-0.54px]">
                        { number }+
                    </span>
                </div>
                <div>
                    <span className="text-[20px] text-[#667085] font-normal leading-normal tracking-[-0.3px]">
                        { title }
                    </span>
                </div>
            </div>
        </>
    )
};

export default HireMeCard;