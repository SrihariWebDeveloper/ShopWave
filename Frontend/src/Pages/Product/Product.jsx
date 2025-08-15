import React, { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card/Card.jsx";

import dropdown_icon from "../../assets/dropdown_icon.png";
import { ShopContext } from "../../Components/Context/Context.jsx";

const Product = () => {
  const {products} = useContext(ShopContext);
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [showFilter, setShowFilter] = useState(false);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilter(productsCopy);
  };

  useEffect(() => {
    applyFilters();
  }, [category, subCategory,products]);

  return (
    <div className="mx-10 my-26" onClick={scrollTo(0, 0)}>
      <h2 className="text-center md:text-2xl font-normal border-b w-fit">
        ALL COLLECTIONS
      </h2>
      <div className="flex flex-col md:flex-row gap-4 w-full mt-6">
        <div className="w-45 md:w-54 ">
          <div className="flex flex-row gap-2">
            <h1 className="text-xl">FILTERS</h1>
            <img
              src={dropdown_icon}
              alt=""
              className={`${
                showFilter
                  ? "w-4 h-4 mt-2 block md:hidden rotate-90"
                  : "w-4 h-4 mt-1 block md:hidden"
              }`}
              onClick={() => setShowFilter(!showFilter)}
            />
          </div>
          <div
            className={`${
              showFilter ? "border p-2 mt-2 block" : "hidden md:block border p-2 mt-2"
            }`}
          >
            <h2 className=" font-normal">CATEGORIES</h2>
            <h4 className="m-2">
              <input
                type="checkbox"
                value={"Men"}
                className="w-4 h-4 mr-2"
                onChange={toggleCategory}
              />
              Men
            </h4>
            <h4 className="m-2">
              <input
                type="checkbox"
                value={"Women"}
                className="w-4 h-4 mr-2"
                onChange={toggleCategory}
              />
              Women
            </h4>
            <h4 className="m-2">
              <input
                type="checkbox"
                value={"Kids"}
                className="w-4 h-4 mr-2"
                onChange={toggleCategory}
              />
              Kids
            </h4>
          </div>
          <div
            className={`${
              showFilter ? "border p-2 mt-2 block" : "hidden md:block border p-2 mt-2"
            }`}
          >
            <h2 className=" font-normal">TYPE</h2>
            <h4 className="m-2">
              <input
                type="checkbox"
                value={"Topwear"}
                className="w-4 h-4 mr-2"
                onChange={toggleSubCategory}
              />
              Topwear
            </h4>
            <h4 className="m-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                className="w-4 h-4 mr-2"
                onChange={toggleSubCategory}
              />
              Bottomwear
            </h4>
            <h4 className="m-2">
              <input
                type="checkbox"
                value={"Winterwear"}
                className="w-4 h-4 mr-2"
                onChange={toggleSubCategory}
              />
              Winterwear
            </h4>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row flex-wrap justify-center gap-4 mt-6">
            {filter.map((Product, index) => {
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
      </div>
    </div>
  );
};

export default Product;
