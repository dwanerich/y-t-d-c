import './nav.css';
import servicesImg from '../img/about-services.gif';
import classes from './About.module.css';
import { Header } from './Header';
import { motion } from 'framer-motion';

const About = () => {
  const line1 =
  "Welcome to Take Two Entertainment!"
  const line2 =
    "Our mission is to provide comprehensive and personalized artist management services to help our clients achieve their goals and maximize their potential in the music industry.";

  const line3 = ""
  const line4 =
  "";
  const line5 =
    "";
  const lineArray = [line1, line2, line3, line4, line5];
  return (
    <div className={classes.aboutBody}>
      <div className={classes.img_cont}>
        <img src={servicesImg} alt="services" />
      </div>
      <div className={classes.text_area}>
        <Header />
        <motion.h2
          initial={{ opacity: 0, y: '200px' }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
            },
          }}
        >
          Luxury Fashion Stylist + Image Curator
        </motion.h2>

        <div>
          {' '}
          {lineArray.map((item, id) => (
            <motion.h4
              key={id}
              initial={{ opacity: 1, x: '60vw', fontFamily: 'Antic Didone' }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                  delay: 1.4,
                  staggerChildren: 0.12,
                },
              }}
            >
              {item}
            </motion.h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
