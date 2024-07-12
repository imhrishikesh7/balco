import React from 'react'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Heading from '../../Components/Heading/Heading'

const Riskmanagement = () => {
  return (
<div>
        <div className='top-spacer marginal row'>
            <div className='col-md-6'>
            <h1>Risk management</h1>
            <Heading theme={"dark"} fval={5} text={`We have established a robust risk management framework that seamlessly aligns with our operational strategies, enabling us to effectively address potential risks and minimize performance volatility. Our capacity to adhere to regulatory requirements empowers us to develop efficient risk mitigation strategies, safeguarding the reputation and resilience of our business.`}/>

            <div>
                <img src="./business-overview/risk1.png" className='img-fluid' alt="" />
            </div>
            <div>
                <img src="./business-overview/risk3.png" className='img-fluid' alt="" />
            </div>
            </div>
            
            <div className='col-md-6'>
                <img src="./business-overview/risk2.png" className='img-fluid' alt="" />
                <img src="./business-overview/risk4.png" className='img-fluid' alt="" />
            </div>

        </div>
    </div>
  )
}

export default Riskmanagement