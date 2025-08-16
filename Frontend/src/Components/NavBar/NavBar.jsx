import React, { useContext, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Logo_dark from "../../assets/logo-ecomerce.png";
import cart_icon from "../../assets/cart_icon.png";
import search_icon from "../../assets/search_icon.png";
import profile_icon from "../../assets/profile_icon.png";
import menu from "../../assets/menu-bars-icon-7.jpg";
import cross_icon from "../../assets/cross_icon.png";
import { ShopContext } from "../Context/Context.jsx";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const {getCartCount,token,setToken} = useContext(ShopContext);

  const logOut = ()=>{
    setToken('');
    localStorage.removeItem("token");
  }

  const [show,setShow] = useState(false)

  return (
    <>
      <div className="bg-white shadow">
        <div
          className={`${
            visible
              ? "bg-[#ddeaeb] h-[100vh] w-full overflow-hidden absolute top-0 z-10 flex flex-col gap-0 md:hidden"
              : "hidden"
          }`}
        >
          <div className="border-b flex flex-row justify-between">
            <img src={Logo_dark} alt="" width={100} className="m-4" />
            <img
              src={cross_icon}
              alt=""
              className="w-4 float-start m-6 cursor-pointer"
              onClick={() => setVisible(false)}
            />
          </div>
          <div className="w-full">
            <ul className="flex flex-col font-bold text-2xl cursor-pointer">
              <NavLink to={"/"} className="border-b p-4">
                HOME
              </NavLink>
              <NavLink to={"/products"} className="border-b p-4">
                COLLECTION
              </NavLink>
              <NavLink to={"/about"} className="border-b p-4">
                ABOUT
              </NavLink>
              <NavLink to={"/contact"} className="border-b p-4">
                CONTACT
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="mx-2 flex flex-row justify-between align-middle">
          <div className="flex flex-row justify-between">
            <div className="ml-2">
              <img
                src={menu}
                alt=""
                className="w-12 mt-6 md:w-0 lg:w-0 lg:hidden md:hidden cursor-pointer overflow-hidden"
                onClick={() => setVisible(true)}
              />
            </div>
            <div className="mt-6 ml-4 lg:mt-4 gap-4">
              <img
                src={Logo_dark}
                alt=""
                className="w-36 lg:w-40 md:w-36 cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-row lg:font-normal  font-medium space-x-1 mt-6 md:gap-6 lg:gap-12 cursor-pointer">
              <NavLink to={"/"}>HOME</NavLink>
              <NavLink to={"/products"}>COLLECTION</NavLink>
              <NavLink to={"/about"}>ABOUT</NavLink>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </ul>
          </div>
          {token? (
            <>
              <div className="flex flex-row gap-4 md:gap-8 my-4 pr-2">
                <div className="bg-[#ddeaeb] border rounded-full hover:bg-white flex flex-row justify-center">
                  <img
                    src={cart_icon}
                    alt=""
                    className="w-6 m-2 cursor-pointer"
                    onClick={() => navigate("/cart")}
                  />
                  <div className=" absolute rounded-full bg-black text-white ml-6 ">
                    <h1 className="mx-1">{getCartCount()}</h1>
                  </div>
                </div>
                <div className="bg-[#ddeaeb] border rounded-full hover:bg-white flex flex-col justify-center mr-12 cursor-pointer" onClick={()=>setShow(!show)}>
                  <img
                    src={profile_icon}
                    alt=""
                    className="w-6 m-2"
                  />
                  <div className={`${show?"absolute top-22 bg-white shadow-2xl flex flex-col":"absolute top-22 bg-white shadow-2xl hidden"}`}>
                    <Link to={'/orders'} className="m-2 cursor-pointer text-stone-400 hover:text-black">My-Orders</Link>
                    <Link to={'/auth'} className="m-2 cursor-pointer  text-stone-400 hover:text-black" onClick={logOut}>LogOut</Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to={'/auth'} className="bg-blue-300 rounded shadow w-auto m-4 p-2 cursor-pointer">
                Get Started
              </Link>
            </>
          )}
        </div>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default NavBar;
