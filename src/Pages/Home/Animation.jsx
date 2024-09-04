import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Animation = ({children}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9, // Adjust this to control when the animation triggers
      });
    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 1 : 50 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
};

export default Animation;