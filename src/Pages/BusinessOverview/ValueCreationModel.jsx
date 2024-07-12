import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'

const ValueCreationModel = () => {
    return (
        <div className='blue-grad-bg py-1'>
            <div className='top-spacer marginal'>
                <h1 className='text-light'>Value creation model</h1>
            </div>
            <div className='marginal row'>
                <div className='col-md-2'>
                    <Heading theme={'light'} fval={5} text={"Our strategy"}/>
                    <Paragraph theme={"light"} p={[`With an emphasis on encouraging indigenous production and the usage of aluminium within the country, we aim to reduce dependence on imports and propel India’s economic growth. We are focused on strengthening our manufacturing excellence through technology integration, innovation, and the adoption of sustainable practices. The successful execution of this strategy is anticipated to ensure our long-term growth and enhance value creation for stakeholders. What we do Mining We derive bauxite and coal from our captive mines through mechanized opencast mining.`]}/>
                </div>
                <div className='col-md-8'>
                <Heading theme={'light'} fval={5} text={"What we do"}/>
                    <img className='img-fluid' src="./business-overview/Model.png" alt="" />
                </div>
                <div className='col-md-2'>
                <Heading theme={'light'} fval={5} text={"The value we create"}/>
                {/* <Paragraph theme={"light"} p={[`With`]}/> */}
                <img className='img-fluid' src="./business-overview/vcmodel2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ValueCreationModel