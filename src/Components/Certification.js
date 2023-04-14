import React from "react";
import ALX_SE from "../Images/ALX_SE.png";
import AYA_CERT from "../Images/AYA_CERT.png";
import udacity from "../Images/udacity.png";
import evtol from "../Images/evtol.png";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Certification = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3 text-[#FF5823]">Certification</h1>
      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              ALX-Software Engineering Certificate.
              <div className="flex text-3xl">
                <a
                  href="https://drive.google.com/file/d/1t7nH2o6bhongT4U8xN_Lb8atWf09d0H5/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={ALX_SE}
              alt="WEB3 LMS application"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
      
      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
          <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={udacity}
              alt="udacity cert"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              ALX-T UDACITY Backend Nanodegree Certificate.
              <div className="flex text-3xl">
                <a
                  href="https://confirm.udacity.com/GJTEDVLQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              AYA Fellowship WEB3 Backend Certificate.
              <div className="flex text-3xl">
                <a
                  href="https://opensea.io/assets/matic/0xbd6aa8a7f8b6241dd82b8e8c382412cb385372fc/15/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={AYA_CERT}
              alt="WEB3 LMS application"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
      
      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
          <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={evtol}
              alt="evTOL application"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              SCRUM Fundamental Certificate.
              <div className="flex text-3xl">
                <a
                  href="https://adnegs-evtol.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certification;
