import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const CapTemplate = ({ title, content, src1, src2, src3, w }) => {
    return (
        <div className='blue-grad-bg top-spacer pb-4'>
            <div className='marginal row align-items-center'>
                <div className='col-md-6'>
                    <Heading theme={"light"} text={title} />
                    <Paragraph theme={"light"} p={content} />
                    <div>
                        <img className={`img-fluid w-${w}`} src={src1} alt="" />
                    </div>

                </div>
                <div className='col-md-6 '>
                    <img className='img-fluid' src={src2} alt="" />
                </div>
            </div>
            <div className='cap-cov-2 '>
                <img src={src3} className='img-fluid  d-block m-auto' alt="" />
            </div>
        </div>
    )
}

export default CapTemplate