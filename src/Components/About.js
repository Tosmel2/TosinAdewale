import React from "react";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import img from "../Images/mine.jpeg";
import { motion } from "framer-motion";

const About = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3 text-[#FF5823]">About</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center font-thin">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 text-justify text-name sm:p-5 sm:pl-10 sm:text-xl "
        >
          I'm a Motivated Frontend Developer with proficiency in React JS. I have a strong interest 
          in designing and building fully responsive web applications as well as developing 
          and changing websites from the layout to the functionality.
          <section className=" mt-2 sm:text-l text-[#FF5823] text-center">
            <div className="flex items-center justify-start my-3 pt-6">
              <TbPhone />
              <p>+2348068957966</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <TbMail />
              <p>adewaletosin0808@gmail.com</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <MdOutlineMyLocation />
              <p>Ogun State, Nigeria.</p>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, zoom: 1 }}
          animate={{
            opacity: 1,
            zoom: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center pt-5"
        >
          <div className=" sm:w-1/2 border-2 border-[#FF5823">
            <img src={img} alt="" className=" w-full  z-10 m-2 hover:ml-0" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
