import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;