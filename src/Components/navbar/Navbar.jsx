import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const imageHolderRef = useRef(null);

  const handleMouseOver = (event) => {
    const value = event.target.getAttribute('data-src');
    imageHolderRef.current.src = value;
  };

  const handleMouseOut = () => {
    imageHolderRef.current.src = '/nestle-logo.png';
  };


  useEffect(() => {
    function resizeNav() {
      const navFullscreen = document.getElementById('nav-fullscreen');
      const navOverlay = document.getElementById('nav-overlay');

      // Set the nav height to fill the window
      navFullscreen.style.height = window.innerHeight + 'px';

      // Set the circle radius to the length of the window diagonal
      const radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
      const diameter = radius * 2;
      navOverlay.style.width = diameter + 'px';
      navOverlay.style.height = diameter + 'px';
      navOverlay.style.marginTop = -radius + 'px';
      navOverlay.style.marginLeft = -radius + 'px';
    }

    // Call resizeNav initially and on window resize
    resizeNav();
    window.addEventListener('resize', resizeNav);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('resize', resizeNav);
    };
  }, []);

  // Toggle nav function
  const toggleNav = () => {
    const navToggle = document.getElementById('nav-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const navFullscreen = document.getElementById('nav-fullscreen');

    navToggle.classList.toggle('open');
    navOverlay.classList.toggle('open');
    navFullscreen.classList.toggle('open');
  };

  return (
    <>
      <div className='navbar flex'>
        <Link to="/" className='brand-logo'><img className='img-fluid' src="./homepage/outlook.png" alt="" /></Link>
        {/* <p className='annual-report-text'>
          Annual<br />
          Report<br />
          2023-24
        </p> */}
        <div id="nav-container">
          <div id="nav-overlay">
            {/* <div className='top-strip'></div> */}
          </div>
          <nav id="nav-fullscreen">
            <div className='nav-menu-wrap'>
              <div>
                <ul>
                  <b>Know BALCO</b>

                  <li><Link onClick={() => toggleNav()} to="/at-a-glance" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>BALCO at a glance</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/core-values" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Core Values</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/product" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Product Portfolio</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/chairmanmsg" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Chairman's Communique</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/ceomsg" >Letter from CEO</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/cfomsg" >CFO's message</Link></li>

                </ul>
                <ul>
                  <b>Business Overview</b>
                  <li><Link onClick={() => toggleNav()} to="/value-creation-model" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Value creation model</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/stakeholder-engagement" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Stakeholder engagement</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/materiality-assessment" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Materiality assessment</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/risk-management" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Risk management</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/about-esg" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About ESG</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/transforming-for-good" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Transforming for good</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/vsf-vsap" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>VSF and VSAP</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/profiles" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Profiles of the Board of Directors
                  </Link></li>
                </ul>
              </div>
              <div>
                <ul>
                  <b>Capitals</b>
                  <li><Link onClick={() => toggleNav()} to="/financial-capital" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Financial Capital</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/manufactured-capital" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Manufactured Capital</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/intellectual-capital" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Intellectual Capital</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/human-capital" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Human Capital</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/social-and-relationship-capital" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Social and Relationship Capital</Link></li>

                  <li><Link onClick={() => toggleNav()} to="/natural-capital" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Natural Capital</Link></li>
                </ul>
                <ul>
                  <b>Awards and Certifications</b>
                  <li><Link onClick={() => toggleNav()} to="/awards" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Awards and accolades</Link></li>
                  <li><Link onClick={() => toggleNav()} to="/certifications" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Certifications</Link></li>
                </ul>
                <ul>
                <b>Statutory Reports</b>
                  <li><Link onClick={() => toggleNav()} to="./docs/BALCO MDA.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Management Discussion and Analysis Report</Link></li>

                  <li><Link onClick={() => toggleNav()} to="./docs/BALCO Notice.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Notice of AGM</Link></li>
                  
                  <li><Link onClick={() => toggleNav()} to="./docs/BALCO Board Report.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Board's Report</Link></li>
                 
                  <li><Link onClick={() => toggleNav()} to="./docs/BALCO CG report.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Report on Corporate Governance</Link></li>
                </ul>
                </div>
                <div>
                <ul>
                <b>Financial Statements</b>
                <li><Link onClick={() => toggleNav()} to="./docs/BALCO accs.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Independent Auditor's Report</Link></li>
                
                <li><Link onClick={() => toggleNav()} to="./docs/BALCO Balance sheet and profit and loss.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Balance Sheet and <br />Statement of Profit and Loss</Link></li>


                <li><Link onClick={() => toggleNav()} to="./docs/BALCO Cash flow.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Statement of Cash Flows</Link></li>

                <li><Link onClick={() => toggleNav()} to="./docs/BALCO Statement of Changes in equity.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Statement of Changes in Equity</Link></li>

                <li><Link onClick={() => toggleNav()} to="./docs/BALCO notes to accoints.pdf" target='_blank' className='' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Notes to Financial Statements</Link></li>

                </ul>
                <ul className='text-center'>
                  <li className='download-rep-btn fs-6 fw-bold'>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        onClick={() => toggleNav()}
                        to="./docs/Balco_AR 2023-24_(11-06-24) Spread.pdf"
                        target='_blank'
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      >
                        Download Full Report <img src="./homepage/dnld.svg" alt="Download" />
                      </Link>
                    </motion.div>
                  </li>
                </ul>
              </div>
              {/* <div className='nav-menu-dynamic-img-container'></div> */}
              {/* <div class="menu-image-holder nav-menu-dynamic-img-container">
                <img src="/nestle-logo.png"
                  ref={imageHolderRef}
                />

              </div> */}
            </div>
          </nav>
          <a id="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className='gradient-line'></div>
    </>
  );
};
