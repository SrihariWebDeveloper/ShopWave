import productModel from "../models/ProductModel.js";
import {v2 as cloudnary} from 'cloudinary';

//add products
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1,image2,image3,image4].filter((iteam)=>iteam!==undefined);

    let images_url = await Promise.all(
        images.map(async (iteam)=>{
            let result = await cloudnary.uploader.upload(iteam.path,{resource_type:"image"});
            return result.secure_url;
        })
    )

    const ProductData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller:bestSeller==="true"?"true":"false",
      image:images_url,
      date:Date.now()
    }

    const product = new productModel(ProductData);

    await product.save();

    res.json({success:true,message:"Product Added"});
  } catch (error) {
        res.json({success:false,message:error.message});
  }
};

//list products
const listProducts = async (req, res) => {
    try {
        const prodcuts = await productModel.find({});
        res.json({success:true,prodcuts});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
};

//remove product
const removeProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product Removed"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
};

//get single product info
const getProductInfo = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success:true,product});
    } catch (error) {
        res.json({success:false,message:error.message});
    }

};

export { addProduct, listProducts, removeProduct, getProductInfo };
