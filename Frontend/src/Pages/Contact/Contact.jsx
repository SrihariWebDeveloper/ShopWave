import React from "react";
import contact_img from "../../assets/contact_img.png";


const Contact = () => {
  return (
    <div className="mx-10 my-26" onClick={scrollTo(0, 0)}>
      <h2 className="text-3xl font-bold mt-5 text-center">Contact Us</h2>
      <hr className="mt-4 mx-18 md:mx-45" />
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <div className="">
          <img src={contact_img} alt="" className="md:max-w-98 h-full" />
        </div>
        <div className="mt-2 md:text-left text-center">
          <h2 className="font-bold text-xl my-4">Our Store</h2>
          <p>54709 e-commerce application <br /> Any where in the India.</p>
          <p className="mt-6">Tel: (+91) 990XX XXXX9 <br /> Email: srihariDev@gmail.com</p>
          <div className="mt-2 md:text-left text-center">
          <h2 className="font-bold text-xl mt-4">Careers at ShopWave.</h2>
          <p className="mt-2">E-commerce application Any where in the India.</p>
          <button
            type="submit"
            className="bg-white text-black font-bold px-6 py-2 mt-6 border"
          >
            Explore Jobs
          </button>
        </div>
        </div>
      </div>
      <div className="mt-18">
        <h2 className="text-4xl font-bold mt-5 text-center">
          Subscribe now & get 20% off
        </h2>
        <p className="mt-6 font-light text-center text-wrap mx-6 lg:font-normal  text-stone-500">
          Lorem ipsum is a dummy or placeholder text commonly used <br /> in
          graphic design, publishing, and web development.
        </p>
        <div className="flex flex-row justify-between h-12 mx-10 border-b-gray-700 border md:mx-40 lg:mx-78 mt-8 rounded">
          <input
            type="text"
            placeholder="Enter your email id"
            className="rounded outline-none w-full h-full pl-2"
          />
          <button
            type="submit"
            className="bg-blue-300 rounded-tr rounded-br p-2 w-18 text-[10px] md:w-26 md:text-[16px]"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
