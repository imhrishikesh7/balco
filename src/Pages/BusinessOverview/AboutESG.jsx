import React from 'react'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Heading from '../../Components/Heading/Heading'

const AboutESG = () => {
    return (
        <div>
            <div className='top-spacer marginal row'>
                <div className='col-md-6'>
                    <h1>About ESG</h1>
                    <Heading theme={"dark"} fval={5} text={`At BALCO, we are committed to prioritizing environmental conservation,social responsibility, and good governance in our operations. To achieve this objective, we are undertaking initiatives to minimize our environmental impact and enhance the well-being of our people and communities, besides fostering greater transparency and accountability in decision-making.`} />
                    <Paragraph p={[`By strengthening our ESG approach, we are aiming to align our business practices with changing stakeholder expectations and make a positive contribution to the environment as well as our communities.`]} />
                    <Heading theme={"blue"} fval={6} text={`ESG Governance`} />
                    <Paragraph p={[`As part of our ongoing ESG commitments, we have established a standardized governance structure across the Vedanta group. The Vedanta ESG Committee, in collaboration with our Group Sustainability and ESG function, oversees the implementation and monitoring of initiatives aligned with our ‘Transforming for Good’ agenda. Additionally, we have set up dedicated forums for management oversight and ESG-focused communities across all business unit levels to take ownership of projects and ensure timely execution.`]} />
                    <Heading theme={"green"} fval={6} text={`ESG Communities of Practice (12 COPs)`} />

                    <div>
                        <img src="./business-overview/esg1.png" className='img-fluid' alt="" />
                    </div>
                </div>

                <div className='col-md-6'>
                    <Heading theme={"blue"} fval={6} text={`About Sustainability Policies`} />
                    <Paragraph p={[`In order to uphold sustainability and adhere to ESG principles, we have implemented a series of policies aimed at embracing a healthy environment and promoting social well-being, both internally and externally.`]} />
                    <img src="./business-overview/esg2.png" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6 mt-5'>
                    <img src="./business-overview/esg3.png" className='img-fluid w-100' alt="" />
                </div>
                <div className='col-md-6 mt-5'>
                    <img src="./business-overview/esg4.png" className='img-fluid w-100' alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutESG