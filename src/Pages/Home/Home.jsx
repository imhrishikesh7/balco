import React from 'react';
import { motion } from 'framer-motion';
import Cover from '../../Components/CHome/Cover/Cover';
import "./Home.css";
import Callout from '../../Components/Callout/Callout';
import Marquee from 'react-fast-marquee';
import BodSlider from '../../Components/CHome/BodSlider/BodSlider';
import { Link } from 'react-router-dom';
import Capslider from '../../Components/CapSlider/Capslider';


export const Home = () => {
  // Cov2 Animation Varients               
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Glance Animation Varients               

  const cardVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  // Map Callout Varients
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Core values Varients
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };



  return (
    <div>
      {/* COVER 1 */}
      <Cover />

      {/* COVER 2 */}
      <div className='cov2'>
        <motion.div
          className='cov2-wrapper flex position-relative'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className='cov2-l'>
            <h2 className='text-light m-0'>Accelerating</h2>
            <h1 className='text-green m-0'>Sustainable</h1>
            <h2 className='text-light m-0'>Inclusive</h2>
            <motion.img
              className='img-fluid'
              src="./homepage/cov2-1.png"
              alt=""
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <div className='cov2-r'>
            <motion.img
              className='img-fluid'
              src="./homepage/cov2-2.png"
              alt=""
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
          <motion.img
            className='img-fluid cov2-growth position-absolute'
            src="./homepage/growth.png"
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.div>
      </div>

      {/* Strategic Footprints */}
      <div className='row marginal position-relative my-4'>
        <h1 className='mb-4'>Strategic Footprints</h1>
        <h4>
          Leveraging our advanced manufacturing and mining facilities in India, we are committed to growing our reach and catering to the evolving demand for aluminium.
        </h4>
        <img className='img-fluid my-4' src="./homepage/mapbalco.png" alt="" />
        <div className='bg-orange map-desc'>
          <p className='fs-6'>
            During FY 2024, our aluminum export volume was 92,126 Mt, which generated a revenue of ₹ 1,810.22 crore.
          </p>
        </div>

        <motion.div
          className="map-callout-row row justify-content-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {[
            { value1: '₹11,365.31 crore', value2: 'India' },
            { value1: '₹904.19 crore', value2: 'Korea' },
            { value1: '₹71.13 crore', value2: 'Malaysia' },
            { value1: '₹195.30 crore', value2: 'Turkey' },
            { value1: '₹99.84 crore', value2: 'Italy' },
            { value1: '₹173.13 crore', value2: 'China' },
            { value1: '₹331.83 crore', value2: 'Others' },
          ].map((data, index) => (
            <motion.div
              key={index}
              className="col-lg-1 col-md-2 col-sm-3 col-4"
              variants={itemVariants}
            >
              <Callout value1={data.value1} value2={data.value2} />
            </motion.div>
          ))}
        </motion.div>



      </div>

      {/* BALCO at a Glance */}
      <div className='row marginal'>
      <h1 className='my-4 text-center'>BALCO at a Glance</h1>

      <motion.div
        className='col-md-6 d-flex mb-4'
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className='card flex-fill bg-green-inv bx-shadow'>
          <div className='card-body'>
            <img className='w-icon mt-2' src="./homepage/ico1.png" alt="" />
            <h4 className='text-blue fw-bold my-3'>Our Vision</h4>
            <p className='fs-6'>
              To be a world class integrated aluminium and power producer, generating sustainable value for all stakeholders.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='col-md-6 d-flex mb-4'
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className='card flex-fill bg-green-inv bx-shadow'>
          <div className='card-body'>
            <img className='w-icon mt-2' src="./homepage/ico2.png" alt="" />
            <h4 className='text-blue fw-bold my-3'>Our Mission</h4>
            <ul className='fs-6'>
              <li>To be amongst the top deciles in the global cost curve</li>
              <li>Achieve operational excellence</li>
              <li>Effective collaboration with stakeholders</li>
              <li>Ensure resource security with efficient supply chain management</li>
              <li>Unleash Employee Potential</li>
              <li>Build and strengthen brand equity</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <Link className='linka m-auto' to="/at-a-glance">
        <div className="btna">Read More</div>
      </Link>
    </div>

      {/* Leadership Speaks */}
      <div className='grey-bg mt-5'>
        <div className='marginal carousel-bg'>
          {/* <h1>Leadership Speaks</h1> */}
          <div id="carouselExampleAutoplaying" className="carousel slide m-auto" data-bs-ride="carousel">
            <div className="carousel-inner ">
              <div className="carousel-item active position-relative text-center ">
                <h2 className='carousel-caption d-none d-md-block p-3 text-blue '>Chairman's Communique  </h2>
                <img src="./homepage/bod1.webp" className="d-block w-100" alt="..." />
                <Link className='linka linka2' to="/chairmanmsg"><div class="btna"> Read More</div> </Link>
              </div>
              <div className="carousel-item position-relative text-center">
                <h2 className='carousel-caption d-none d-md-block p-3 text-blue '>Letter from CEO</h2>
                <img src="./homepage/bod2.webp" className="d-block w-100" alt="..." />
                <Link className='linka linka2' to="/ceomsg"><div class="btna"> Read More</div> </Link>
              </div>
              <div className="carousel-item position-relative text-center">
                <h2 className='carousel-caption d-none d-md-block p-3 text-blue '>CFO's message</h2>
                <img src="./homepage/bod3.webp" className="d-block w-100" alt="..." />
                <Link className='linka linka2' to="/cfomsg"><div class="btna"> Read More</div> </Link>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


        </div>
      </div>

      {/* BOD Section 2*/}
      <div className='marginal'>
        <h1>Board of Directors</h1>
        <BodSlider />
      </div>

      {/* Our Offerings Section */}
      <div className='marginal'>
        <h1 className='my-4'>Industries we serve</h1>
        <Marquee speed={70} gradient={false}>
          <div className="marquee-item">
            <img src="./homepage/mr1.png" alt="Image 1" className="marquee-image" />
            <span className="marquee-text fs-4">Ship building</span>
          </div>
          <div className="marquee-item">
            <img src="./homepage/mr2.png" alt="Image 2" className="marquee-image" />
            <span className="marquee-text fs-4">Medical equipment</span>
          </div>
          <div className="marquee-item">
            <img src="./homepage/mr3.png" alt="Image 3" className="marquee-image" />
            <span className="marquee-text fs-4">Food packaging</span>
          </div>
          <div className="marquee-item">
            <img src="./homepage/mr4.png" alt="Image 4" className="marquee-image" />
            <span className="marquee-text fs-4">Automobile</span>
          </div>
          <div className="marquee-item">
            <img src="./homepage/mr5.png" alt="Image 5" className="marquee-image" />
            <span className="marquee-text fs-4">Building construction</span>
          </div>
          <div className="marquee-item">
            <img src="./homepage/mr6.png" alt="Image 6" className="marquee-image" />
            <span className="marquee-text fs-4">Power infrastructure</span>
          </div>
          <div className="marquee-item">
            <img src="./homepage/mr7.png" alt="Image 7" className="marquee-image" />
            <span className="marquee-text fs-4">Defence</span>
          </div>
          <div className="marquee-item">
            <img src="./homepage/mr8.png" alt="Image 8" className="marquee-image" />
            <span className="marquee-text fs-4">Electronic appliances</span>
          </div>
          {/* Add more items as needed */}
        </Marquee>



      </div>

      {/* Our Capitals Section */}
      <Capslider />
    </div>
  );
}

export default Home;
