import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { CatContext } from "../context/CatContext";
import Controls from "../components/Controls";

const MainPage = () => {
  const { catImage } = useContext(CatContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 py-10 px-6 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-10"
      >
        Random Cat Viewer
      </motion.h1>

      <div className="w-full max-w-6xl flex flex-col gap-10 justify-center items-center md:flex-row ">
        <div className=" flex justify-center items-center min-h-[300px]">
          <Controls />
          {catImage ? (
            <motion.img
              key={catImage}
              src={catImage}
              alt="A random cat"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: imageLoaded ? 1 : 0,
                scale: imageLoaded ? 1 : 0.95,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onLoad={() => setImageLoaded(true)}
              className="w-[400px] h-[300px] object-cover rounded-xl shadow-xl border border-gray-300 dark:border-gray-700"
            />
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No cat yet. Click the button on the left.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
