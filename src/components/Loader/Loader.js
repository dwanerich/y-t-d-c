import React, { useEffect } from 'react';
import classes from './Loader.module.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../Header';

export const sentence = {
  hidden: { opacity: 1, y: 100, fontFamily: 'Antic Didone' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3,
      delay: 0.5,
      staggerChildren: 0.12,
    },
  },
};

export const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const Loader = () => {
  const navigate = useNavigate();
  const line1 = '"Be The Best Dressed In The Room"';
  const line2 = '- Ariana Weisner';

  let timeout = null;

  const handleLoader = () => {
    timeout = setTimeout(() => {
      navigate('/home');
    }, 8000);
  };

  useEffect(() => {
    handleLoader();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <div className={classes.pageBody}>
        <motion.h3
          className={classes.headingText}
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split('').map((char, index) => {
            return (
              <motion.span key={char + '-' + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line2.split('').map((char, index) => {
            return (
              <motion.span key={char + '-' + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h3>
      </div>
    </>
  );
};

export default Loader;
