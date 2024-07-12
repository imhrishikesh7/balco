import React from 'react'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Heading from '../../Components/Heading/Heading'

const StakeholderEngagement = () => {
  return (
    <div>
        <div className='top-spacer marginal row'>
            <div className='col-md-6'>
            <h1>Stakeholder engagement</h1>
            <Paragraph p={[`Operating a strong stakeholder engagement framework, we regularly engage with key stakeholders to strategise, identify growth opportunities andmake informed decisions. Through this, we also aim to set priorities and improve our business practices to improve business growth and maximize stakeholder return.`]} />
            <Heading theme={"blue"} fval={5} text={`We have formulated a Stakeholder`}/>
            <Heading theme={"blue"} fval={5} text={`Engagement Procedure (SEP)`}/>
            </div>
            <div className='col-md-6'>
                <img src="./business-overview/stakeh1.png" className='img-fluid' alt="" />
            </div>
            <div className='col-md-6'>
                <img src="./business-overview/stakeh2.png" className='img-fluid' alt="" />
            </div>
            <div className='col-md-6'>
                <img src="./business-overview/stakeh3.png" className='img-fluid' alt="" />
            </div>
        </div>
    </div>
  )
}

export default StakeholderEngagement