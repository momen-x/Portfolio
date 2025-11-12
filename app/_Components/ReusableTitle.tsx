"use client";
import { motion } from "framer-motion";
const ReusableTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div className="text-center space-y-4">
      <motion.p className="  text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
        {title}
      </motion.p>
      <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {description}
      </motion.h2>
      <motion.div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
    </motion.div>
  );
};

export default ReusableTitle;
