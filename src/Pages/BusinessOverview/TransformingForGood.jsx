import React from 'react'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Heading from '../../Components/Heading/Heading'

const TransformingForGood = () => {
  return (
    <div>
    <div className='top-spacer marginal row'>
        <div className='col-md-6'>
        <h1>Transforming for good</h1>
        <Heading theme={"dark"} fval={5} text={`At BALCO, we are dedicated to prioritizing both individuals and the environment across our complete value chain. We closely collaborate with an extensive network of business associates to advance the cause of fostering a sustainable future.`}/>
        <Paragraph p={[`Vedanta has embraced the following \u000A objectives, with BALCO participating \u000A in their attainment.`]} />
        
        {/* <Heading theme={"blue"} fval={6} text={`Our materiality assessment process`}/> */}
        <div>
            <img src="./business-overview/good1.png" className='img-fluid' alt="" />
            <img src="./business-overview/good2.png" className='img-fluid' alt="" />
        </div>
        {/* <div >
            <img src="./business-overview/material2.png" className='img-fluid' alt="" />
        </div> */}
        </div>
        
        <div className='col-md-6'>
            <img src="./business-overview/good3.png" className='img-fluid' alt="" />
        </div>
    </div>
</div>
  )
}

export default TransformingForGood