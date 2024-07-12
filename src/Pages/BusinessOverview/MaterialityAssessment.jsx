import React from 'react'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Heading from '../../Components/Heading/Heading'

const MaterialityAssessment = () => {
  return (
    <div>
        <div className='top-spacer marginal row'>
            <div className='col-md-6'>
            <h1>Materiality assessment</h1>
            <Heading theme={"dark"} fval={5} text={`We engage with our stakeholders to identify and address issues that hold significance for our business. Through a comprehensive materiality assessment, involving the participation of various internal and external stakeholders, we have identified key areas of importance.`}/>
            <Paragraph p={[`These areas have been identified in accordance with industry-leading standards set forth by organizations such as SASB, MSCI, S&P Global and ICMM. The outcomes of this assessment shapes the development of our business plans and the formulation of our sustainability strategy across short, medium and long-term horizons. A consolidated list of material topics has been compiled with the Mutually Exclusive and Cumulative Exhaustive (MECE) set serving as the foundation for stakeholder surveys.`]} />
            <Heading theme={"blue"} fval={6} text={`Our materiality assessment process`}/>
            <div>
                <img src="./business-overview/material1.png" className='img-fluid' alt="" />
            </div>
            <div >
                <img src="./business-overview/material2.png" className='img-fluid' alt="" />
            </div>
            </div>
            
            <div className='col-md-6'>
                <img src="./business-overview/material3.png" className='img-fluid' alt="" />
            </div>
        </div>
    </div>
  )
}

export default MaterialityAssessment