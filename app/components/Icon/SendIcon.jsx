const SendIcon = ({ width = 24, height = 25, fill = "none", fillPath = "#FCFCFD" }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
                 fill={fill}>
                <path fill={fillPath}
                      d="M6.296 3.487C3.91 2.386 1.362 4.667 2.193 7.16l1.261 3.74a1 1 0 0 0 .948.681H13a1 1 0 1 1 0 2H4.402a1 1 0 0 0-.948.68l-1.261 3.742c-.831 2.493 1.717 4.773 4.103 3.672l13.802-6.37c2.324-1.072 2.324-4.375 0-5.448L6.296 3.487Z"/>
            </svg>
        </i>
    );
};

export default SendIcon;