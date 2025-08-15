import React, { useContext, useEffect, useState } from "react";
import { products } from "../../assets/assets.js";
import arrow_icon from "../../assets/arrow_icon.svg";
import Card from "../Card/Card.jsx";
import { ShopContext } from "../Context/Context.jsx";

const Products = () => {
  const {products} = useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,4));
  },[products])
  return (
    <>
      <div className="mx-10 my-26">
        <h2 className="text-4xl font-bold mt-5 text-center">Latest Collection's</h2>
        <p className="mt-6 font-light text-center text-wrap text-xl mx-6 lg:font-normal">
          Lorem ipsum is a dummy or placeholder text commonly used <br /> in
          graphic design, publishing, and web development.{" "}
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-6 mt-6">
          {latestProducts.map((Product, index) => {
            return (
             <div className="" key={index}>
               <Card
                name={Product.name}
                price={Product.price}
                image={Product.image[0]}
                id={Product._id}
              />
             </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
