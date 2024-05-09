import React from 'react';
import classes from './Service.module.css';
import { motion, useAnimation } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Service = ({ serviceData }) => {
  const { direction, headline, info, image, options } = serviceData;

  const navigate = useNavigate();

  const exploreControl = useAnimation();
  const optionsControl = useAnimation();

  const showOptions = async () => {
    await exploreControl.start({
      opacity: 0,
      y: '-150px',

      transition: { duration: 1 },
    });
    await optionsControl.start({
      opacity: 1,
      y: '20px',
      display: 'flex',
      transition: { duration: 1.5 },
    });
    await exploreControl.start({
      visibility: 'hidden',
    });
  };

  const reverseOptions = async () => {
    await exploreControl.start({
      visibility: 'visible',
    });
    await optionsControl.start({
      opacity: 0,
      y: '100px',
      transition: { duration: 1.5 },
    });
    await exploreControl.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
    await optionsControl.start({ display: 'none' });
  };
  return (
    <div className={classes.serviceContainer}>
      {direction === 'basic' ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: '-200px' }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5 },
            }}
            className={classes.callToAction}
          >
            <motion.div
              className={classes.content}
              initial={{ opacity: 1, y: 0 }}
              animate={exploreControl}
            >
              <h2>{headline}</h2>

              <p>{info}</p>
              <button onClick={options.length > 0 ? showOptions : () => {}}>
                More
              </button>
            </motion.div>
            {options.length > 0 ? (
              <motion.div
                className={classes.options}
                initial={{ opacity: 0, y: '100px', display: 'none' }}
                animate={optionsControl}
              >
                <ArrowBackIcon
                  className={classes.back}
                  onClick={reverseOptions}
                />
                {options.map((item, id) => (
                  <p onClick={() => navigate(item.url)} key={id}>
                    {item.optionName}
                  </p>
                ))}
              </motion.div>
            ) : null}
          </motion.div>
          <div className={classes.imgCont}>
            <motion.img
              initial={{ opacity: 0, x: '200px' }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1.5 },
              }}
              src={image}
              alt={'Ariana Weisner'}
              className={classes.bannerImg}
            />
          </div>
        </>
      ) : (
        <>
          <div className={classes.imgCont}>
            <motion.img
              initial={{ opacity: 0, x: '200px' }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1.5 },
              }}
              src={image}
              alt={'Take Two'}
              className={classes.bannerImg}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: '-200px' }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5 },
            }}
            className={classes.callToAction}
          >
            <motion.div
              className={classes.content}
              initial={{ opacity: 1, y: 0 }}
              animate={exploreControl}
            >
              <h2>{headline}</h2>

              <p>{info}</p>
              <button onClick={options.length > 0 ? showOptions : () => {}}>
                More
              </button>
            </motion.div>
            {options.length > 0 ? (
              <motion.div
                className={classes.options}
                initial={{ opacity: 0, y: '100px', display: 'none' }}
                animate={optionsControl}
              >
                <ArrowBackIcon
                  className={classes.back}
                  onClick={reverseOptions}
                />
                {options.map((item, id) => (
                  <p onClick={() => navigate(item.url)} key={id}>
                    {item.optionName}
                  </p>
                ))}
              </motion.div>
            ) : null}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Service;
