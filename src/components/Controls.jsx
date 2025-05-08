import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CatContext } from "../context/CatContext";

const Controls = () => {
  const { enabled, setEnabled, autoRefresh, setAutoRefresh, getCat } =
    useContext(CatContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-6 max-w-md mx-auto bg-white sm:rounded-2xl  md:rounded-l-2xl min-h-[300px] shadow-md space-y-4"
    >
      <div className="flex items-center space-x-2">
        <input
          id="enabled"
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enabled" className="text-gray-700 font-medium">
          Enabled
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="autoRefresh"
          type="checkbox"
          checked={autoRefresh}
          onChange={() => setAutoRefresh(!autoRefresh)}
          disabled={!enabled}
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded disabled:opacity-50"
        />
        <label htmlFor="autoRefresh" className="text-gray-700 font-medium">
          Auto-refresh every 5 seconds
        </label>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={getCat}
        disabled={!enabled}
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition 
          ${
            enabled
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Get Cat
      </motion.button>
    </motion.div>
  );
};

export default Controls;
