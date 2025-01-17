const YoutubeIcon = ({ width = 24, height = 25, fill = "none", fillPath = "white" }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
                 fill={fill}>
                <path
                    d="M17 4.08105H7C4 4.08105 2 6.08105 2 9.08105V15.0811C2 18.0811 4 20.0811 7 20.0811H17C20 20.0811 22 18.0811 22 15.0811V9.08105C22 6.08105 20 4.08105 17 4.08105ZM13.89 13.1111L11.42 14.5911C10.42 15.1911 9.59998 14.7311 9.59998 13.5611V10.5911C9.59998 9.42106 10.42 8.96107 11.42 9.56107L13.89 11.041C14.84 11.621 14.84 12.5411 13.89 13.1111Z"
                    fill={fillPath}/>
            </svg>
        </i>
    );
};

export default YoutubeIcon;