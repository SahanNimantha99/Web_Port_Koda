import React from 'react';
import { motion } from 'framer-motion';
import './services.scss';

const cardVariants = {
  initial: {
    height: '250px',
  },
  hover: {
    height: '500px',
    transition: {
      duration: 0.3,
    },
  },
};

const buttonVariants = {
  initial: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0 },
};

const imageVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Services = () => {
  return (
    <div className="services">
      <div className="title-row">
        <h2>WHO WE ARE</h2>
        <h1>
          Transforming Ideas into <span className="highlight">Reality</span>
        </h1>
      </div>

      <div className="card-row">
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <img src="/Service_1.png" alt="Service 1" />
          <div className="card-text">
            <p>Creative UI designs</p>
            <motion.div
              className="full-text"
              initial="initial"
              whileHover="hover"
            >
              Elevate your brand with captivating UI designs that catch users and enhance their digital experience.
              Our creative team expertly blends innovation and aesthetics to meticulously craft visually stunning interfaces, ensuring user experience to make sure your digital presence stands out, fostering user engagement in the online arena.<motion.button
                className="card-button"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
              >
                See Project
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <img src="/Service_2.png" alt="Service 2" />
          <div className="card-text">
            <p>Creative UI designs</p>
            <motion.div
              className="full-text"
              initial="initial"
              whileHover="hover"
            >
              Elevate your brand with captivating UI designs that catch users and enhance their digital experience.
              Our creative team expertly blends innovation and aesthetics to meticulously craft visually stunning interfaces, ensuring user experience to make sure your digital presence stands out, fostering user engagement in the online arena.<motion.button
                className="card-button"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
              >
                See Project
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <img src="/Service_3.png" alt="Service 3" />
          <div className="card-text">
            <p>Creative UI designs</p>
            <motion.div
              className="full-text"
              initial="initial"
              whileHover="hover"
            >
              Elevate your brand with captivating UI designs that catch users and enhance their digital experience.
              Our creative team expertly blends innovation and aesthetics to meticulously craft visually stunning interfaces, ensuring user experience to make sure your digital presence stands out, fostering user engagement in the online arena.<motion.button
                className="card-button"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
              >
                See Project
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
