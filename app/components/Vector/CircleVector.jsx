const CircleVector = ({ isColor = false }) => {
    return (
        <div>
            <div className="w-12 h-12 gap-[10px] flex items-center justify-center rounded-full border border-dashed border-[#1D2939] bg-white">
                <div className={`${isColor ? "bg-primary" : "bg-[#1D2939]"} w-9 h-9 flex items-center justify-center rounded-full`}></div>
            </div>
        </div>
    )
};

export default CircleVector;