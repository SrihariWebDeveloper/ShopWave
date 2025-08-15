import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import Card from "../../Components/Card/Card.jsx";
import { ShopContext } from "../../Components/Context/Context.jsx";

const ProductsInfo = () => {
  const { productId } = useParams();
  const {addtoCardProduct,products} = useContext(ShopContext);

  const [ProductData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProdcutDetails = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProdcutDetails();
  }, [productId,products]);

  return ProductData ? (
    <div className="mx-10 my-26">
      {/* main */}
      <div className="flex mx-4 flex-col md:flex-col lg:flex-row gap-8 md:mx-22">
        {/* left */}
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="md:max-w-22 flex overflow-scroll flex-row md:flex-col gap-3.5 m-2">
            {ProductData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                alt=""
                onClick={() => setImage(item)}
                className={`${image === item ? "border-2 shadow w-24" : "w-24"}`}
              />
            ))}
          </div>
          <div className="my-2 max-w-full">
            <img src={image} alt="" className="" />
          </div>
        </div>
        {/* right */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold">{ProductData.name}</h2>
          <div className="flex flex-row gap-2 mt-2">
            <div className="flex flex-row gap-2 mt-1">
              <img src={star_icon} alt="" className="w-4 h-4" />
              <img src={star_icon} alt="" className="w-4 h-4" />
              <img src={star_icon} alt="" className="w-4 h-4" />
              <img src={star_icon} alt="" className="w-4 h-4" />
              <img src={star_dull_icon} alt="" className="w-4 h-4" />
            </div>
            <div className="">
              <h1 className="font-bold">(122)</h1>
            </div>
          </div>
          <h1 className="text-2xl font-bold my-4">${ProductData.price}</h1>
          <p className="font-normal my-4 md:w-xl">{ProductData.description}</p>
          <div>
            <h4 className="font-bold text-[18px]">Select Size</h4>
            <div className="flex flex-row gap-4 my-2 font-bold">
              {ProductData.sizes.map((iteam, index) => (
                <h2
                  className={`${
                    size === iteam
                      ? "border p-2 w-12 text-center border-amber-500 bg-white text-amber-500"
                      : "border cursor-pointer p-2 w-12 text-center"
                  }`}
                  onClick={() => setSize(iteam)}
                  key={index}
                >
                  {iteam}
                </h2>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white font-bold px-6 py-2 mt-6 hover:bg-gray-900" onClick={()=>addtoCardProduct(ProductData._id,size)}
          >
            ADD TO CART
          </button>
          <hr className="mt-4" />
          <p className="mt-2">
            100% Original product, <br />
            Cash on delivery is available on this product,
            <br /> Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <div className="hidden md:block md:m-22">
        <div className="flex flex-row">
          <h4 className="border md:p-4">Description</h4>
          <h4 className="border border-black p-4 text-gray-400">
            Reviews(122)
          </h4>
        </div>
        <div className="border">
          <p className="my-8 ml-4">
            {ProductData.description}
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development.Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.Lorem ipsum is a dummy or placeholder text commonly
            used in graphic design, publishing, and web development.
          </p>
        </div>
      </div>
      <div className="pt-20">
        <h2 className="text-3xl font-bold text-center">
          Related Product's
        </h2>
        <p className="mt-6 font-light text-center text-wrap text-xl mx-6 lg:font-normal">
          Lorem ipsum is a dummy or placeholder text commonly used <br /> in
          graphic design, publishing, and web development.{" "}
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-6 mt-14">
        {products
          .filter((prod) => prod.category === ProductData.category)
          .slice(0, 5)
          .map((product, index) => {
            return (
              <div className="" key={index} onClick={()=>scrollTo(0,0)}>
                <Card
                  name={product.name}
                  price={product.price}
                  image={product.image[0]}
                  id={product._id}
                />
              </div>
            );
          })}
          </div>
      </div>
    </div>
  ) : (
    <div className="mx-10 my-26">NotFound</div>
  );
};

export default ProductsInfo;
