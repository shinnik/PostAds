export default function getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/jpg");
    console.log(dataURL);
    // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    return dataURL;
}
