// import React, { useState } from "react";
// import { TbWebhook } from "react-icons/tb";
import { motion } from "framer-motion";

const Loading = ({ setLoading }) => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="flex justify-center h-screen items-center text-4xl font-thin">
      <motion.div animate={{ zoom: 0 }} transition={{ duration: 2, delay: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [0, 300, 300, 0] }}
          transition={{ duration: 1 }}
        >
          Tosmel
          {/* <TbWebhook /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
