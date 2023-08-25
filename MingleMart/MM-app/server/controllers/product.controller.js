const Product = require("../models/product.model");
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2;
let streamifier = require('streamifier');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = (file) => {
    console.log('LINE 19 CONTROLLER:', file);
    return new Promise((resolve, reject) => {
        let cld_upload_stream = cloudinary.uploader.upload_stream(
            { folder: "mingle-mart", public_id: file.originalname },
            (error, result) => {
                if (error){
                    console.log('LINE 25 CONTROLLER:', error);
                    reject(error);
                }
                else resolve(result);
            }
        );
        streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
    });
};

// ! if you want to delete images from the cloudinary server look into cloudinary.uploader.destroy

module.exports = {
    createProduct: async (req, res) => {
        try{
            const result = await uploadToCloudinary(req.file);
            req.body.image = result.url;
            // console.log('LINE 6 CONTROLLER:',req.body);
            const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
            // console.log('LINE 8 CONTROLLER:',decodedJwt.payload);
            req.body.userId = decodedJwt.payload._id;
            console.log('LINE 10 CONTROLLER:', req.body);
            const product = await Product.create(req.body);
            res.status(201).json(product);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getAllProducts: async (req, res) => {
        try{
            const products = await Product.find().populate("userId");
            res.status(200).json(products);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
}