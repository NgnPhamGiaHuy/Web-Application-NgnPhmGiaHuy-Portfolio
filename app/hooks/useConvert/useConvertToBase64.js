"use client"

import { useEffect, useState } from "react";

import { convertToBase64 } from "@/app/utils";

const useConvertToBase64 = (imageUrl) => {
    const [base64Image, setBase64Image] = useState("");

    useEffect(() => {
        convertToBase64(imageUrl.src).then((dataUrl) => {
            setBase64Image(dataUrl);
        });
    }, [imageUrl]);

    return base64Image;
}

export default useConvertToBase64;