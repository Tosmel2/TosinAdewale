// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ show }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className={`${show && "blur-md"} pt-5 px-5 md:px-12 lg:pl-24`}>
      {/* <span className="text-[#64ffda] italic pt-2 pb-8 ff">&lt;body&gt;</span> */}
      <p className=" pb-3  ff">Hi 🙂 , my name is </p>
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
        className="font-bold sm:text-7xl text-6xl text-name big tracking-wide sm:pt-3 md:flex"
      >
        <div>
          <motion.span variants={item}>A</motion.span>
          <motion.span variants={item}>d</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>w</motion.span>
          <motion.span variants={item}>a</motion.span>
          <motion.span variants={item}>l</motion.span>
          <motion.span variants={item}>e</motion.span>
        </div>

        <div className="md:ml-4">
          <motion.span variants={item}>T</motion.span>
          <motion.span variants={item}>o</motion.span>
          <motion.span variants={item}>s</motion.span>
          <motion.span variants={item}>i</motion.span>
          <motion.span variants={item}>n</motion.span>
          <motion.span variants={item}>.</motion.span>
        </div>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.5 }}
        className="text-sub text-3xl font-bold pb-3 lg:text-5xl"
      >
        I am an Enthuastic Software Engineer.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.5 }}
        className="py-3 md:w-2/3 text-sub ff"
      >
        I design and develop beautiful, functioning and responsive websites. Every day, I strive to become a better developer.
      </motion.p>
      <Link to="/contact">
        <motion.button className="border-[#FF5823] px-8 py-3 my-3 border rounded-sm hover:bg-[#233554] text-xl font-thin ff">
          Contact Me
        </motion.button>
      </Link>

      {/* <div className="text-[#64ffda] italic ff mt-10">&lt;/body&gt;</div> */}
    </div>
  );
};

export default Home;
