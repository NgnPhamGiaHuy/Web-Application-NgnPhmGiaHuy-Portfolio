const TwitterIcon = ({ width = 24, height = 25, fill = "none", fillPath = "white" }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
                 fill={fill}>
                <path
                    d="M20.1066 8.71529C20.0826 8.49182 20.0546 8.31274 20.0316 8.18511L21.9161 5.3584C22.0345 5.18068 22.027 4.94731 21.8974 4.77756C21.7677 4.60781 21.5446 4.53917 21.3419 4.60671L18.7212 5.48027C18.5827 5.27371 18.3773 5.00125 18.1036 4.7275C17.5491 4.173 16.6794 3.58105 15.5 3.58105C14.2775 3.58105 13.3727 3.92323 12.7266 4.485C12.0872 5.041 11.75 5.76974 11.5775 6.45979C11.4052 7.14894 11.3898 7.82716 11.4147 8.32477C11.422 8.46989 11.4327 8.60123 11.4444 8.71489C10.1893 8.9818 8.87591 8.57293 7.58934 7.8094C6.17064 6.96746 4.87015 5.74406 3.85358 4.7275C3.71259 4.58651 3.50131 4.54277 3.31593 4.61618C3.13054 4.6896 3.0065 4.86614 3.00027 5.06544C2.87287 9.14225 3.71338 14.0768 7.51119 16.5791C5.9138 17.4432 4.34766 17.8462 2.43801 18.0849C2.21938 18.1122 2.04441 18.2795 2.00721 18.4966C1.97001 18.7138 2.07935 18.9297 2.27642 19.0283C7.43512 21.6076 14.1199 21.4212 17.9 16.3811C19.467 14.2917 19.9921 12.197 20.1233 10.6226C20.1888 9.83625 20.1563 9.17914 20.1066 8.71529Z"
                    fill={fillPath}/>
            </svg>
        </i>
    );
};

export default TwitterIcon;