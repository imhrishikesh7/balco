import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BodSlider.css';

const BodSlider = () => {
  // Sample data for cards
  const cards = [
    { id: 1, img: './homepage/cc1.png', title: 'Mr. S. K. Roongta', text: 'Chairman & Independent Director' },
    { id: 2, img: './homepage/cc2.png', title: 'Mr. Rajesh Kumar', text: 'CEO & Whole Time Director' },
    { id: 3, img: './homepage/cc3.png', title: 'Mr. Tarun Jain', text: 'Director' },
    { id: 4, img: './homepage/cc4.png', title: 'Mr. D.D. Jalan', text: 'Independent Director' },
    { id: 5, img: './homepage/cc5.png', title: 'Dr. Anoop Kumar Mittal', text: 'Independent Director' },
    { id: 6, img: './homepage/cc6.png', title: 'Ms. Farida M. Naik', text: 'Government Nominee Director' },
    { id: 7, img: './homepage/cc7.png', title: 'Ms. Nirupama Kotru', text: 'Government Nominee Director' },
    { id: 8, img: './homepage/cc8.png', title: 'Mr. Sanjeev Verma', text: 'Government Nominee Director' },
    { id: 9, img: './homepage/cc9.png', title: 'Mr. Vivek Kumar Sharma', text: 'Government Nominee Director' },
    // Add more cards as needed
  ];

  // Function to chunk array into groups of 3
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Split cards into groups of 3
  const chunkedCards = chunkArray(cards, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const carouselElement = document.getElementById('cardsCarousel');
    const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 3000, // Set the auto-slide interval to 3 seconds
      ride: 'carousel',
    });

    return () => {
      bootstrapCarousel.dispose();
    };
  }, []);

  return (
    <div id="cardsCarousel" className="carousel slide my-5" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {chunkedCards.map((chunk, index) => (
          <motion.div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            data-bs-interval="3000" // Add interval for each item if needed
          >
            <div className="row">
              {chunk.map((card) => (
                <motion.div
                  key={card.id}
                  className="col-lg-4"
                  variants={itemVariants}
                >
                  <div className="card text-center border-0">
                    <img src={card.img} className="card-img-top" alt="" />
                    <div className="card-body bg-green">
                      <h5 className="card-title text-blue fw-bold">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#cardsCarousel"
        data-bs-slide="prev"
        style={{ left: '-2%' }}
      >
        <span className="carousel-control-prev-icon p-4" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#cardsCarousel"
        data-bs-slide="next"
        style={{ right: '-2%' }}
      >
        <span className="carousel-control-next-icon p-4" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="d-flex justify-content-center mt-4">
        <Link className='linka' to="/profiles">
          <div className="btna">Read More</div>
        </Link>
      </div>
    </div>
  );
};

export default BodSlider;
