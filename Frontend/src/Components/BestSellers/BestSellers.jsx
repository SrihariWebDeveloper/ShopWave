import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card.jsx';
import { ShopContext } from '../Context/Context.jsx';


const BestSellers = () => {
  const {products} = useContext(ShopContext);
    const [Filtered,setFilterd] = useState([]);

    const fileterdProducts=()=>{
        setFilterd(products.filter((product)=>{
            if(product.bestSeller){
                return product;
            }
        }))
    }
    useEffect(()=>{
        fileterdProducts();
    },[products])
  return (
      <>
      <div className="mx-10 my-26">
        <h2 className="text-4xl font-bold mt-5 text-center">Bestseller's</h2>
        <p className="mt-6 font-light text-center text-wrap text-xl mx-6 lg:font-normal">
          Lorem ipsum is a dummy or placeholder text commonly used <br /> in
          graphic design, publishing, and web development.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-6 mt-6">
          {Filtered.map((Product, index) => {
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
  )
}

export default BestSellers
