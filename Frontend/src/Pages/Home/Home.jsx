import React from "react";
import Header from "../../Components/Header/Header.jsx";
import Products from "../../Components/Products/Products.jsx";
import BestSellers from "../../Components/BestSellers/BestSellers.jsx";
import Info from "../../Components/info/Info.jsx";

const Home = () => {
  return (
    <>
      <div className="" onClick={scrollTo(0, 0)}>
        <Header />
        <Products />
        <BestSellers />
        <Info />
      </div>
    </>
  );
};

export default Home;
