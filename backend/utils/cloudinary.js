const cloudinary = require("cloudinary");
const fs = require("fs");


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true,
// });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        //upload the file on cloudinary!
        const response = await cloudinary.v2.uploader.upload(localFilePath, {

            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            folder: "maxlence-backend-data",
            resource_type: "auto",
            secure: true,
        });
        // file has been uploaded successfully
        // console.log("file is uploaded on cloudinary ", response); 

        // Remove the locally saved temporary file if an error occurred
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return response;

    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);

        // Remove the locally saved temporary file if an error occurred
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return null;
    }
}



module.exports = { uploadOnCloudinary }