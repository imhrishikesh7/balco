import React from 'react'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Heading from '../../Components/Heading/Heading'

const VsfVsap = () => {
  return (
    <div>
        <div className='top-spacer marginal row'>
            <div className='col-md-6'>
            <h1>VSF and VSAP</h1>
            <Heading theme={"blue"} fval={6} text={`Vedanta Sustainability Framework (VSF)`}/>
            <Paragraph p={[`We have instituted a comprehensive Sustainable Development Framework that incorporates an extensive array of sustainability policies, standards, and guidelines. This framework functions ensures the consistent attainment of operational excellence, while simultaneously fostering positive outcomes for our business, the communities we serve and the environment in which we operate. As part of our commitment, we prioritize the education, training, and professional development of both our employees and business partners. Through this initiative, we aim to equip them with the requisite knowledge and skills necessary to consistently uphold world-class sustainability standards, processes, and practices.`]} />
            
            <div>
                <img src="./business-overview/vsf1.png" className='img-fluid' alt="" />
            </div>
            
            </div>
            
            <div className='col-md-6'>
                <img src="./business-overview/vsf2.png" className='img-fluid' alt="" />
                <Heading theme={"blue"} fval={6} text={"Vedanta Sustainability Assurance Process (VSAP)"} />
                <Paragraph p={[`The Vedanta Sustainability Assurance Program (VSAP) is a specialized tool aimed at ensuring sustainabilityrisk management within our diverse business portfolio and assessing our adherence to the Vedanta Sustainability Framework. This assurance model encompasses distinct modules addressing critical aspects suchas environmental stewardship, health and safety, community engagement and human rights.`,
                `To ascertain the efficacy of our assurance mechanism, we employ a comprehensive approach. This involves the systematic monitoring and documentation of corrective and preventive actions undertaken by our organization, along with periodic formal audits conducted by external subject matter experts.`,
                `VSAP operates on an annual cycle, overseen by both the Sustainability Committee and the Executive Committee, which are accountable for monitoringthe outcomes. These committees subsequently report their findings to the Board. In response to identified gaps, we develop management plans and implement corrective measures. The progress of these actions undergoes consistent review, evaluation and documentation.`,
                `This process enables us to recognize and disseminate insights from both successes and setbacks, presenting valuable opportunites for organizational learning. By sharing these lessons across our enterprise, we continuously strive to enhance our sustainability performance.`,
                ]}/>
                <img src="./business-overview/vsf3.png" className='img-fluid' alt="" />
            </div>
        </div>
    </div>
  )
}

export default VsfVsap