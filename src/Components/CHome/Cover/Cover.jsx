import React from 'react';
import { motion } from 'framer-motion';
import './Cover.css';

const Cover = () => {
    return (
        <motion.div
            className='home-banner'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className='inner-hero'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <p className='m-0 text-center text-blue'>
                    <b>Bharat Aluminium Company Limited</b>
                </p>
                <p className='m-0 text-center'>Integrated Annual report 2023-24</p>
                <motion.img
                    className='img-fluid'
                    src='./homepage/COVER.png'
                    alt=''
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />
            </motion.div>
            <motion.div
                className='title-wrapper'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
            >
                <div className='title'>
                    <p className='themeline'>
                        Accelerating <span className='text-green'>Sustainable</span> <br />
                        Inclusive Growth
                    </p>
                    <p className='subline'>Contributing to India’s growth story...</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Cover;
