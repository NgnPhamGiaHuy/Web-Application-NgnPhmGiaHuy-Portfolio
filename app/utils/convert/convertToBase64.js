const convertToBase64 = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob); // Convert blob to base64
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export default convertToBase64;