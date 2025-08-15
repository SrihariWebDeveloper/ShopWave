import React, { useState } from 'react'
import { assets } from '../../assets/admin_assets/assets.js'
import { toast } from "react-toastify";
import axios from 'axios';


const AddProduct = ({token}) => {
  const [image1,setImage1] = useState(false);
  const [image2,setImage2] = useState(false);
  const [image3,setImage3] = useState(false);
  const [image4,setImage4] = useState(false);

  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [category,setCategory] = useState('Men');
  const [subCategory,setSubCategory] = useState('Topwear');
  const [price,setPrice] = useState('');
  const [size,setSize] = useState([]);
  const [bestseller,setBestseller] = useState(false);

  const onSubmitHandler = async(e)=>{
    try {
      e.preventDefault();
      const formData = new FormData();

      formData.append("name",name);
      formData.append("description",description);
      formData.append("category",category);
      formData.append("subCategory",subCategory);
      formData.append("price",price);
      formData.append("sizes",JSON.stringify(size));
      formData.append("bestseller",bestseller);
      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      image3 && formData.append("image3",image3);
      image4 && formData.append("image4",image4);

      const response = await axios.post("https://shopwave-97x5.onrender.com/api/products/add",formData,{headers:{token}});

      if(response.data.success){
        toast.success(response.data.message);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setName('');
        setDescription('');
        setSize([]);
        setBestseller(false);
        setPrice('');
      }else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  }


  return (
    <div>
      <form className="mx-2 md:mx-10 my-2" onSubmit={onSubmitHandler}>
        <div className="">
          <h2>Upload Image</h2>
        <div className="flex flex-row gap-4 my-4">
         <div className="flex flex-col md:flex-row gap-4">
           <label htmlFor="image1">
            <img src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="" className='max-w-24 max-h-24 cursor-pointer'/>
            <input type="file" id='image1' hidden onChange={(e)=>setImage1(e.target.files[0])} />
          </label>
          <label htmlFor="image2">
            <img src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="" className='max-w-24 max-h-24 cursor-pointer'/>
            <input type="file" id='image2' hidden onChange={(e)=>setImage2(e.target.files[0])} />
          </label>
         </div>
          <div className="flex flex-col md:flex-row gap-4">
            <label htmlFor="image3">
            <img src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="" className='max-w-24 max-h-24 cursor-pointer'/>
            <input type="file" id='image3' hidden onChange={(e)=>setImage3(e.target.files[0])} />
          </label>
          <label htmlFor="image4">
            <img src={!image4?assets.upload_area:URL.createObjectURL(image4)} alt="" className='max-w-24 max-h-24 cursor-pointer'/>
            <input type="file" id='image4' hidden onChange={(e)=>setImage4(e.target.files[0])} />
          </label>
          </div>
        </div>
        </div>
        <div className="mt-6">
          <h2>Product name</h2>
          <input type="text" name="" id="" className='border w-1/2 p-2 mt-2 rounded' required placeholder='Type Here..' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="mt-4">
          <h2>Product description</h2>
          <textarea type="text" name="" id="" className='border w-1/2 p-2 mt-2 rounded' required placeholder='Write content here..' value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className="flex flex-col md:flex-row mt-4 gap-4 md:gap-12">
        <div className="">
          <h2>Product category</h2>
          <select name="" id="" className='border p-2 mt-2 rounded w-34' required onChange={(e)=>setCategory(e.target.value)}>
            <option value={"Men"}>Men</option>
            <option value={"Women"}>Women</option>
            <option value={"Kids"}>Kids</option>
          </select>
        </div>
        <div className="">
          <h2>Sub category</h2>
          <select name="" id="" className='border p-2 mt-2 rounded w-34' required onChange={(e)=>setSubCategory(e.target.value)}>
            <option value={"Topwear"}>Topwear</option>
            <option value={"Bottomwear"}>Bottomwear</option>
            <option value={"Winterwear"}>Winterwear</option>
          </select>
        </div>
        <div className="">
          <h2>Product Price</h2>
          <input type="number" name="" id="" className='border p-2 mt-2 rounded w-34' required placeholder='0' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        </div>
        <div className="mt-6">
          <h2>Product Price</h2>
          <div className="flex flex-row gap-6 mt-2">
            <div className="flex flex-col md:flex-row gap-6">
              <h2 className={`${size.includes("S")?"bg-orange-100 border px-4 py-2":"bg-slate-50 border px-4 py-2"}`} onClick={()=>setSize(prev=>prev.includes("S")?prev.filter(iteam=>iteam !=="S"):[...prev,"S"])}>S</h2>
            <h2 className={`${size.includes("M")?"bg-orange-100 border px-4 py-2":"bg-slate-50 border px-4 py-2"}`} onClick={()=>setSize(prev=>prev.includes("M")?prev.filter(iteam=>iteam !=="M"):[...prev,"M"])}>M</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <h2 className={`${size.includes("L")?"bg-orange-100 border px-4 py-2":"bg-slate-50 border px-4 py-2"}`} onClick={()=>setSize(prev=>prev.includes("L")?prev.filter(iteam=>iteam !=="L"):[...prev,"L"])}>L</h2>
              <h2 className={`${size.includes("XL")?"bg-orange-100 border px-4 py-2":"bg-slate-50 border px-4 py-2"}`} onClick={()=>setSize(prev=>prev.includes("XL")?prev.filter(iteam=>iteam !=="XL"):[...prev,"XL"])}>XL</h2>
            <h2 className={`${size.includes("XXL")?"bg-orange-100 border px-4 py-2":"bg-slate-50 border px-4 py-2"}`} onClick={()=>setSize(prev=>prev.includes("XXL")?prev.filter(iteam=>iteam !=="XXL"):[...prev,"XXL"])}>XXL</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-4">
          <input type="checkbox" name="" id="bestseller" className='' onChange={()=>setBestseller(prev=>!prev)} checked={bestseller}/>
          <label htmlFor="bestseller">Add to bestseller</label>
        </div>
        <button type="submit" className="cursor-pointer bg-black text-white mt-4 px-6 py-2">
              ADD
            </button>
      </form>
    </div>
  )
}

export default AddProduct
