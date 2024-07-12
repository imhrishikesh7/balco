import React from 'react';
import { motion } from 'framer-motion';

// Fade in variants for the container
const fadeInContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

// Fade-up variants for the value cards with staggered effect
const valueCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};

const CoreValues = () => {
  const valueCards1 = [
    {
      img: './homepage/corei2.png',
      title: 'Integrity',
      text: 'We lay great emphasis on human rights, respecting the principle of free, prior, informed consent. Our engagement with our stakeholders gives local communities the opportunity to voice their opinion and concerns.',
      bg: 'bg-purple',
    },
    {
      img: './homepage/corei3.png',
      title: 'Respect',
      text: 'We place utmost importance to engaging ethically and transparently with all our stakeholders and believe in being accountable for our actions to maintain the highest standards of professionalism and additionally, comply with international policy and procedures.',
      bg: 'bg-orange',
    },
    {
      img: './homepage/corei4.png',
      title: 'Excellence',
      text: 'Our primary focus is delivering value of the highest standard to our stakeholders. We are constantly motivated on improving cost and our quality of production in each of our businesses through a culture of best practice benchmarking.',
      bg: 'bg-green',
    },
    {
      img: './homepage/corei5.png',
      title: 'Care',
      text: 'As we continue to grow, we are committed to the triple bottom line of People, Planet and Prosperity to create a sustainable future in a zero-harm environment for our communities.',
      bg: 'bg-purple',
    },
  ];

  const valueCards2 = [
    {
      img: './homepage/corei6.png',
      title: 'Innovation',
      text: 'We inculcate a conducive environment for innovation that leads to a zero-harm environment, exemplifying optimal utilization of our natural resources, improved efficiencies, and recoveries of by-products.',
      bg: 'bg-orange',
    },
    {
      img: './homepage/corei7.png',
      title: 'Trust',
      text: 'We actively foster a culture of mutual trust in our interaction with our stakeholders and encourage an open dialogue, which ensures mutual respect.',
      bg: 'bg-green',
    },
    {
      img: './homepage/corei8.png',
      title: 'Entrepreneurship',
      text: 'At Vedanta, our people are our most important assets. We actively encourage their development and support them in pursuing their goals.',
      bg: 'bg-orange',
    },
  ];

  return (
    <motion.div
      className="row marginal top-spacer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInContainerVariants}
    >
      <motion.img
        className="img-fluid w-icon my-4"
        src="./homepage/corei1.png"
        alt=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInContainerVariants}
      />
      <motion.h2
        className="text-blue"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInContainerVariants}
      >
        Core values
      </motion.h2>
      <motion.hr
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInContainerVariants}
      />
      <div className="row my-4">
        {valueCards1.map((value, index) => (
          <motion.div
            key={index}
            className={`col-md-3 ${value.bg} p-4`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={valueCardVariants}
          >
            <img className="img-fluid w-icon2" src={value.img} alt="" />
            <h3 className="text-green my-2">{value.title}</h3>
            <p className="fs-6">{value.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="row my-4">
        {valueCards2.map((value, index) => (
          <motion.div
            key={index}
            className={`col-md-4 ${value.bg} p-4`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={valueCardVariants}
          >
            <img className="img-fluid w-icon2" src={value.img} alt="" />
            <h3 className="text-green my-2">{value.title}</h3>
            <p className="fs-6">{value.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoreValues;
