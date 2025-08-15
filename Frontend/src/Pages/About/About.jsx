import React from "react";
import about_img from "../../assets/about_img.png";

const About = () => {
  return (
    <div className="mx-10 my-26" onClick={scrollTo(0, 0)}>
      <h2 className="text-3xl font-bold mt-5 text-center">About Us</h2>
      <hr className="mt-4 mx-18 md:mx-45" />
      {/* <p className="mt-6 font-light text-center text-wrap text-xl mx-6 lg:font-normal">
        Lorem ipsum is a dummy or placeholder text commonly used <br /> in
        graphic design, publishing, and web development.{" "}
      </p> */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <div className="">
          <img src={about_img} alt="" className="md:max-w-98 h-full" />
        </div>
        <div className="mt-2 md:text-left text-center">
          <p className="">
            Lorem ipsum is a dummy or placeholder text commonly used <br /> in
            graphic design, publishing, and web development.Lorem <br />
            ipsum is a dummy or placeholder text commonly used <br /> in graphic
            design, publishing, and web development.Lorem <br />
            ipsum is a dummy or placeholder text commonly used <br /> in graphic
            design, publishing, and web development.
          </p>
          <p className="mt-6">
            Lorem ipsum is a dummy or placeholder text commonly used <br /> in
            graphic design, publishing, and web development.
          </p>
          <h2 className="font-bold text-xl my-4">Our Mission</h2>
          <p className="">
            Lorem ipsum is a dummy or placeholder text commonly used <br /> in
            graphic design, publishing, and web development.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-14 md:text-left text-center md:ml-9 ">
        Why Choose Us
      </h2>
      <div className="flex flex-col md:flex-row justify-center mt-4">
        <div className="border p-8">
          <h2 className="text-xl font-bold">Quality Assurance:</h2>
          <p className="mt-4">
            Lorem ipsum is a dummy or placeholder text commonly used <br /> in
            graphic design, publishing, and web development.{" "}
          </p>
        </div>
        <div className="border p-8">
          <h2 className="text-xl font-bold">Convenience:</h2>
          <p className="mt-4">
            Lorem ipsum is a dummy or placeholder text commonly used <br /> in
            graphic design, publishing, and web development.{" "}
          </p>
        </div>
        <div className="border p-8">
          <h2 className="text-xl font-bold">Exceptional Customer Service:</h2>
          <p className="mt-4">
            Lorem ipsum is a dummy or placeholder text commonly used <br /> in
            graphic design, publishing, and web development.{" "}
          </p>
        </div>
      </div>
      <div className="mt-14">
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

export default About;
