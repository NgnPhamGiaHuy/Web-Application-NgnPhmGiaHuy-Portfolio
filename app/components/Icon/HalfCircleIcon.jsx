import React from 'react';

const HalfCircleIcon = ({ width = 813, height = 406, fill = "none", fillPath = "#FEB273" }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
                 fill={fill}>
                <path
                    d="M812.673 406C542.08 406 271.487 406 0.894409 406C0.894409 181.833 182.617 0.110565 406.784 0.110565C630.95 0.110565 812.673 181.833 812.673 406Z"
                    fill={fillPath}/>
            </svg>
        </i>
    );
};

export default HalfCircleIcon;