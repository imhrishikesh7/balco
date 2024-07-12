import React from 'react'
import CapTemplate from '../../Components/CapitalTemplate/CapTemplate'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Callout2 from '../../Components/Callout/Callout2'

const IntelCap = () => {
    return (
        <div>
            <CapTemplate title={"Intellectual \u000A Capital"} w={75} src1={"./capitals/cap3sdg.png"} src2={"./capitals/int-cap-cov1.png"} src3={"./capitals/int-cap-cov2.png"} content={[`At BALCO, we realize the need to be innovative and to adapt our processes to evolving industry needs. It keeps us focused on improving our R&D, deploying advanced technology, implementing cutting-edge solutions and introducing new products to the market. It has also bolstered our sustainability efforts, improved our emphasis on product quality and optimized production processes.`]} />
            <div className='marginal row'>
                <div className='col-md-6'>
                    <Heading theme={"blue"} fval={"6"} text={`Research and Development`} />
                    <Paragraph p={[`At BALCO, we are committed to capitalize on emerging opportunities through our targeted R&D efforts. Taking into consideration the growing demand for aluminium within the country, we realize the need to develop new and improved products that are aligned to industry requirements. It is expected to improve our contribution to the ‘Make in India’ campaign and reduce import dependence. This will also enable us to focus on the indigenous manufacturing of aluminium alloy and meet the diverse needs of defense, aerospace, marine, railways, electric vehicles and other sectors.`]} />
                    <Callout2 value1={"₹ 3.78 crore"} value2={"Expenditure on R&D"} />
                    <Heading theme={"green"} fval={"6"} text={`Enabling innovation`} />
                    <Paragraph p={[`Since the early 1980s, we have continued to focus on advancing cable and conductor technology, starting with the production of temper rods and the development of alloy rods. In collaboration with customers and engineers, we have pioneered innovative manufacturing techniques that optimize the performance of aluminium alloy wire rods in various applications. Through incessant R&D, we have not only diversified our product portfolio but also enhanced our market share and brand equity. This commitment to innovation has solidified our reputation as one of the prominent players in the industry and paving the way for a more sustainable future.`]} />
                </div>
                <div className='col-md-6'>
                    <Heading theme={"orange"} fval={6} text={`We have initiated R&D projects for new \u000a product development focusing on the \u000a following areas:`} />
                    <img src="./capitals/int1.png" className='img-fluid col-md-6' alt="" />
                </div>

                <div className='col-md-6'>
                    <Heading theme={"blue"} fval={6} text={"Innovating to minimize our environmental impact"} />
                    <Paragraph p={[`To reduce our carbon footprint, we continue to engage in R&D activities that help us focus on the implementation of advanced technologies and sustainable practices.`]} />
                    <Heading theme={"blue"} fval={6} text={"Streamlining operations through digitalization"} />
                    <Paragraph p={[`We realize the importance of adapting our operations with rapid changes in the industry. To fulfil this objective, we have integrated advanced technologies within our operations. Through partnerships with start-ups, we have gained access to cutting-edge solutions that offer a fresh perspective to deal with industry-specific challenges.`,
                        `Additionally, strategic collaborations with technology giants, including Microsoft and Google have enabled us to explore and implement advanced AI/ML-based solutions, tailored to the needs of the aluminium manufacturing sector. It has helped enhance our operational efficiency and product quality, while also improving our contribution to a sustainable future.`]} />
                </div>
                <div className='col-md-6'>
                    <Heading theme={"green"} fval={6} text={"Some of the key initiatives undertaken in FY 2024 are mentioned below-"} />
                    <img src="./capitals/int2.png" className='img-fluid' alt="" />
                </div>
                <Heading theme={"green"} fval={4} text={"Some of the internal initiatives to streamline our operations"} />
                <div className='col-md-6 mt-1'>
                    <img src="./capitals/int3.png" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6 mt-1'>
                    <img src="./capitals/int4.png" className='img-fluid' alt="" />
                </div>

                <div className='col-md-6 mt-4'>
                    <Heading theme={"blue"} fval={6} text={"Achieving sustainability goals through tech integration"} />
                    <Paragraph p={[`The integration of digital technologies has been pivotal in propelling BALCO towards a sustainable future.`]} />
                    <img src="./capitals/int5.png" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6 mt-4'>
                <Heading theme={"blue"} fval={6} text={"Committed to quality"} />
                <Paragraph p={[`As we endeavor to broaden our market presence across various industries, our foremost objective remains the enhancement of product quality and the implementation of well-calibrated strategies to ensure the secure delivery of goods to our customers. In order to fulfil this objective, we have devised an innovative process for the production of rolled aluminium products. It optimizes alloy chemistry, casting parameters and homogenization techniques. Consequently, it has helped attain the desired microstructure and deliver high-quality circles for our rolled product line.`,
                `During FY 2024, we have also focused on improving our packaging. We have introduced rubberized packing boards crafted from high-quality material capable of resisting wear-and-tear and protecting the quality of our products. For our alloy ingots, we have implemented a 15-layer staking technique to improve load distribution and minimize slippage during transit, which has resulted in zero transit damage for Ingots.`,
                // `Owing to improved packaging, wehave prevented product damage and therefore have not received any product returns from customers during the year. It has also helped preserve the product quality and earned us the trust of clients.`,
                // `Digitalization of the Service Level Agreement (SLA) and Process Scorecard has enabled us to transparently track service performance. It has also facilitated the monitoring of SLA KPIs and operational metrics that drive process improvements and compliance. Further, it has assisted us in making informed decisions and generate monthly and yearly reports that can be tracked on a dashboard. The initiative reduces the cost of poor quality (COPQ), potential savings of approximately ₹5 crore per annum.`
                ]}/>
                <Callout2 value1={"24%"} value2={"Reduction in complaints"}/>
                <Heading theme={"blue"} fval={6} text={"Data privacy and security"}/>
                <Paragraph p={[`At BALCO, we prioritize data security and privacy, in adherence with the Data Protection Act, 1998. It ensures the secure storage and preservation of all personal data, whether paper- based or electronic and makesit accessible only to authorized personnel. Our Data Privacy Policy aligns with generally acceptable privacy principles, governing the collection and the use and protection of personal information. Measures such as secure data disclosure to third- parties, stringent security protocols, data quality assurance and robust monitoring mechanisms underscore our commitment to safeguarding data integrity and privacy.`]}/>
                <img src="./capitals/int6.png" className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    )
}

export default IntelCap