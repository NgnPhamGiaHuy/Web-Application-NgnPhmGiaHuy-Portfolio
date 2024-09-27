const WhatsappIcon = ({ width = 24, height = 25, fill = "none", fillPath = "white" }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
                 fill={fill}>
                <path
                    d="M21.98 11.491C21.64 5.69101 16.37 1.22102 10.3 2.22102C6.12004 2.91102 2.77005 6.301 2.12005 10.481C1.74005 12.901 2.24007 15.191 3.33007 17.081L2.44006 20.391C2.24006 21.141 2.93004 21.821 3.67004 21.611L6.93005 20.711C8.41005 21.581 10.14 22.081 11.99 22.081C17.63 22.081 22.31 17.111 21.98 11.491ZM16.8801 15.801C16.7901 15.981 16.68 16.151 16.54 16.311C16.29 16.581 16.02 16.781 15.72 16.901C15.42 17.031 15.09 17.091 14.74 17.091C14.23 17.091 13.68 16.971 13.11 16.721C12.53 16.471 11.9601 16.141 11.3901 15.731C10.8101 15.311 10.2701 14.841 9.75005 14.331C9.23005 13.811 8.77003 13.261 8.35003 12.691C7.94003 12.121 7.61005 11.551 7.37005 10.981C7.13005 10.411 7.01006 9.86101 7.01006 9.34101C7.01006 9.00101 7.07006 8.67101 7.19006 8.37101C7.31006 8.06101 7.50007 7.78101 7.77007 7.53101C8.09007 7.21101 8.44005 7.06101 8.81005 7.06101C8.95005 7.06101 9.09002 7.09101 9.22002 7.15101C9.35002 7.21101 9.47005 7.30101 9.56005 7.43101L10.72 9.07099C10.81 9.20099 10.88 9.311 10.92 9.421C10.97 9.531 10.99 9.631 10.99 9.731C10.99 9.851 10.9501 9.97101 10.8801 10.091C10.8101 10.211 10.72 10.331 10.6 10.451L10.22 10.851C10.16 10.911 10.1401 10.971 10.1401 11.051C10.1401 11.091 10.15 11.131 10.16 11.171C10.18 11.211 10.1901 11.241 10.2001 11.271C10.2901 11.441 10.45 11.651 10.67 11.911C10.9 12.171 11.1401 12.441 11.4001 12.701C11.6701 12.971 11.9301 13.211 12.2001 13.441C12.4601 13.661 12.68 13.811 12.85 13.901C12.88 13.911 12.9101 13.931 12.9401 13.941C12.9801 13.961 13.0201 13.961 13.0701 13.961C13.1601 13.961 13.2201 13.931 13.2801 13.871L13.66 13.491C13.79 13.361 13.9101 13.271 14.0201 13.211C14.1401 13.141 14.2501 13.101 14.3801 13.101C14.4801 13.101 14.5801 13.121 14.6901 13.171C14.8001 13.221 14.92 13.281 15.04 13.371L16.7001 14.551C16.8301 14.641 16.92 14.751 16.98 14.871C17.03 15.001 17.0601 15.121 17.0601 15.261C17.0001 15.431 16.9601 15.621 16.8801 15.801Z"
                    fill={fillPath}/>
            </svg>
        </i>
    );
};

export default WhatsappIcon;