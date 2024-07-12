import React from 'react'
import CapTemplate from '../../Components/CapitalTemplate/CapTemplate'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Callout2 from '../../Components/Callout/Callout2'
const NaturalCap = () => {
  return (
    <div>
      <CapTemplate title={"Natural \u000A Capital"} w={75} src1={"./capitals/cap6sdg.png"} src2={"./capitals/nat-cap-cov1.png"} src3={"./capitals/nat-cap-cov2.png"} content={[`At BALCO, we envision a greener and more sustainable future. To realize this objective, we are focusing on operating responsibly, mitigating our carbon footprint, optimizing energy efficiency, preserving water resources and safeguarding biodiversity. Through persistent endeavors and the adoption of sustainable manufacturing practices, we aim to nurture the environment and conserve its precious resources.`]} />
      <div className='marginal row'>
        {/* PAGE1 */}
        <div className='col-md-6'>
          <img src="./capitals/nat1.png" className='img-fluid' alt="" />
        </div>
        <div className='col-md-6'>
          <img src="./capitals/nat2.png" className='img-fluid' alt="" />
        </div>

        {/* PAGE2 */}
        <div className='col-md-6 mt-4'>
          <img src="./capitals/nat3.png" className='img-fluid' alt="" />
        </div>
        <div className='col-md-6 mt-4'>
          <img src="./capitals/nat4.png" className='img-fluid' alt="" />
        </div>

        {/* PAGE3 */}
        <div className='col-md-6 mt-4'>
          <img src="./capitals/nat5.png" className='img-fluid' alt="" />
        </div>
        <div className='col-md-6 mt-4'>
          <img src="./capitals/nat6.png" className='img-fluid' alt="" />
        </div>

      </div>
    </div>
  )
}

export default NaturalCap