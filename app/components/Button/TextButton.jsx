const TextButton = ({ label, onClick = null }) => {
    return (
        <div>
            <div className="px-10 py-5 gap-[10px] flex items-center justify-center bg-primary rounded-[60px] cursor-pointer" onClick={onClick}>
                <span className="text-[20px] text-white font-bold leading-normal tracking-[-0.3px]">
                    { label }
                </span>
            </div>
        </div>
    );
};

export default TextButton;