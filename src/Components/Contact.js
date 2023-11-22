// import React, { useRef } from "react";
// import { useForm } from "react-hook-form";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = ({ show }) => {

  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // }

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={`${show && "blur-sm"} pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3">Contact Me </h1>
      <small>Send Me a Message and I would be notified</small>
      <article className="sm:flex">
        <motion.form
          // ref={form}
          // onSubmit={""}
          // onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:w-1/2"
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3, delay: 0.05, staggerChildren: 0.2 }}
          method="post" 
          data-netlify="true"
          name="Contact"
          data-netlify-honeypot="bot-field"
          // action="/"
        >
          <input type="hidden" name="form-name" value="Contact" />
          <motion.div className="sm:flex " variants={item}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="my-2 py-2 bg-[#233554] w-full sm:w-1/2 placeholder:pl-2 placeholder:text-sub sm:mr-2"
              // {...register("name", { required: true, maxLength: 20 })}
            />
            {/* {errors.name && <small style={{color:'red'}}>Please check the Name</small>} */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-2 py-2 bg-[#233554] w-full sm:w-1/2 placeholder:pl-2 placeholder:text-sub "
              // {...register("email",
              //   { 
              //       required: true,  
              //       pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
              //   })}
            />
            {/* {errors.email && <small style={{color:'red'}}>Please check the Email</small>} */}
          </motion.div>
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            className="my-2 py-2 bg-[#233554] w-full placeholder:pl-2 placeholder:text-sub "
            variants={item}
          />
          <motion.textarea
            placeholder="Message"
            name="message"
            className="my-2 bg-[#233554] w-full placeholder:pl-2 placeholder:text-sub h-7 min-h-full resize-none"
            variants={item} 
          ></motion.textarea>
          <motion.button
            type="submit"
            className="border-[#FF5823] px-3 py-2 my-2 items-start border rounded-sm hover:bg-[#233554] text-xl font-thin"
            variants={item}
          >
            Send
          </motion.button>
        </motion.form>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{ duration: 0.5 }}
          className="sm:ml-8 mt-2 sm:text-xl flex-col flex justify-center "
        >
          <div className="flex items-center my-3">
            <TbPhone />
            <p>+2348068957966</p>
          </div>
          <div className="flex items-center my-3">
            <TbMail />
            <p>adewaletosin0808@gmail.com</p>
          </div>
          <div className="flex items-center my-3">
            <MdOutlineMyLocation />
            <p>Oyo State, Nigeria.</p>
          </div>
        </motion.section>
      </article>
    </motion.div>
  );
};

export default Contact;
