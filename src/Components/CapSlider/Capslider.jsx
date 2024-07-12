import React from 'react';
import './Capslider.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Capslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const cards = [
    {
      title: 'Financial Capital',
      image: './capitals/fin-cap-cov2.png',
      description: 'At BALCO, we endeavor to optimally utilize our financial resources...',
      highlights: [
        { bold: '₹13,141 crore', normal: 'Revenue' },
        { bold: '₹1,938 crore', normal: 'EBITDA' }
      ]
    },
    {
      title: 'Manufactured Capital',
      image: './capitals/mfd-cap-cov2.png',
      description: 'At BALCO, we are dedicated to achieving manufacturing excellence...',
      highlights: [
        { bold: '100%', normal: 'Leakage control led to ZERO demurrage cost' },
        { bold: '45%', normal: 'Reduction in the cost of sea freight' }
      ]
    },
    {
      title: 'Intellectual Capital',
      image: './homepage/newcap2.png',
      description: 'At BALCO, we realize the need to be innovative and to adapt...',
      highlights: [
        { bold: '₹ 3.78 crore', normal: 'Expenditure on R&D' },
        { bold: 'strategic collaborations', normal: 'with tech giants' }
      ]
    },
    {
      title: 'Human Capital',
      image: './capitals/hum222.jpg',
      description: 'With a strong focus on creating a people-centric workplace...',
      highlights: [
        { bold: '88%', normal: 'Employee engagement score' },
        { bold: '7,087', normal: 'Total workforce' }
      ]
    },
    {
      title: 'Social and Relationship \u000a Capital',
      image: './homepage/newcap1.JPG',
      description: 'At BALCO, we are committed to acting as a responsible...',
      highlights: [
        { bold: '4,749', normal: 'Farmers benefitted' },
        { bold: '5,741', normal: 'Women benefitted' }
      ]
    },
    {
      title: 'Natural Capital',
      image: './homepage/nat-plant.png',
      description: 'At BALCO, we envision a greener and more sustainable future...',
      highlights: [
        { bold: 'ISO 14001', normal: 'Certified' },
        { bold: 'ISO 14064', normal: 'Certified' }
      ]
    },
    // Add more cards as needed
  ];

  return (
    <div className="marginal mt-5">
      <h1 className='my-4'>Our Capitals</h1>
      <div className="row">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4">
              <Link to={`/${card.title.toLowerCase().replace(/ /g, '-')}`} className="url-box">
                <figure className='newsCard news-Slide-up'>
                  <img src={card.image} alt={card.title} />
                  <div className={`newsCaption px-4 ${card.title === 'Social and Relationship \u000a Capital' ? 'special-caption' : ''}`}>
                    <div className="d-flex align-items-center justify-content-between cnt-title">
                      <h4 className='newsCaption-title text-white m-0'>{card.title}</h4>
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </div>
                    <div className='newsCaption-content d-flex'>
                      <p className="col-10 py-3 px-0">{card.description}</p>
                    </div>
                  </div>
                  <span className="overlay"></span>
                  <div className="highlight-overlay">
                    {card.highlights.map((highlight, index) => (
                      <div key={index} className="highlight">
                        <strong>{highlight.bold}</strong>
                        <p>{highlight.normal}</p>
                      </div>
                    ))}
                  </div>
                </figure>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Capslider;
