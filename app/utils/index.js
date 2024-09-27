import convertToBase64 from "@/app/utils/convert/convertToBase64";

export const calculateHeight = (count) => {
    switch (count) {
        case 1:
            return "h-fit";
        case 2:
            return `${105 * count}px`;
        case 3:
            return `${130 * count}px`;
        case 4:
            return `${140 * count}px`;
        case 5:
            return `${145 * count}px`;
        case 6:
            return `${150 * count}px`;
        default:
            return `${150 * count}px`;
    }
};

export {
    convertToBase64,
}