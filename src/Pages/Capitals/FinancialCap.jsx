import React from 'react'
import CapTemplate from '../../Components/CapitalTemplate/CapTemplate'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Callout2 from '../../Components/Callout/Callout2'

const FinancialCap = () => {
    return (
        // Cover Template
        <div>
            <CapTemplate title={"Financial \u000A Capital"} w={25} src1={"./capitals/cap1sdg.png"} src2={"./capitals/fin-cap-cov1.png"} src3={"./capitals/fin-cap-cov2.png"} content={[`At BALCO, we endeavor to optimally utilize our financial resources to generate long-term returns on investments. We aim to consistently benchmark our financial performance, mitigate risks and generate more value for stakeholders. This approach has not only resulted in strategic investments but has also enabled us to ensure the prudent allocation of funds to fulfil our growth ambitions.`]} />
            <div className='marginal row'>
                <div className='col-md-6'>
                    <Heading theme={"blue"} fval={6} text={"Financial performance"} />
                    <Paragraph p={[`Our consistent efforts and prudent actions have contributed to business growth, thereby delivering on stakeholder expectations. Looking ahead, our aim will be to continue prioritizing the revenue growth with steady operating cash flow generation and returns.`]} />
                    <Heading theme={"green"} fval={6} text={"During FY 2024, we have achieved a credit rating of CRISIL \u000a AA- for our long-term borrowings."} />
                    <img src="./capitals/fincap1.png" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6'>
                    <Heading theme={"blue"} fval={6} text={"Analysis of financial indicators"} />
                    <img src="./capitals/fincap2.png" className='img-fluid' alt="" />
                    <Heading theme={"blue"} fval={6} text={"Product-wise revenue break up"} />
                    <img src="./capitals/fincap3.png" className='img-fluid' alt="" />
                    <img src="./capitals/fincap4.png" className='img-fluid' alt="" />
                </div>
            </div>
            <div className='marginal row mt-5'>
                <div className='col-md-6'>
                    <Heading theme={"blue"} fval={6} text={"Strategically moving ahead"} />
                    <Paragraph p={[`Due to a growing government impetus on infrastructure projects across the length and breadth of the country and an emphasis on ‘Make in India’, the demand for aluminium is expected to significantly increase by FY 2025. Also, there has been a notable surge in the utilization of aluminium alloys across sectors including defense, aerospace, marine, railways and electric vehicles. These developments have facilitated the indigenisation of products and reduced reliance on imported materials. BALCO has played a pivotal role in this regard by enhancing capacity and dedicating considerable resources to R&D. It has not only resulted in the development of new products but has also catered to the growing demand for aluminium products.`]} />
                    <div className='flex justify-content-between'>
                        <Callout2 value1={"574 KT"} value2={"Total saleable production"}/>
                        <Callout2 value1={"1%"} value2={"YoY increase in total \u000a saleable value in FY 2024"}/>
                    </div>
                    <Paragraph p={[`\u000a Our efforts in the fiscal year 2024 resulted in a notable reductionof production costs by 18%. This achievement, which brought our production cost down to H1.66 lakh/ ton, was facilitated by a multifaceted approach. Along with prioritizing operational efficiency, streamlining processes and minimizing waste across the organization, we also opted for rigorous cost optimization procedures to maximize resource utilization and minimize our operational costs. To fulfil this objective, we sourced raw materials at lower costs and increased the production of value-added products. It played an important role in capitalizing on emerging opportunities and expanding our domestic market share.`]}/>
                    <Callout2 value1={"18%"} value2={"Reduced cost of production"}/>
                    <img src="./capitals/fincap5.png" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6'>

                    <div className='bg-lorange p-2'>
                        <Paragraph p={[`We are accelerating the exploration and development of the Barra Coal Block, a critical endeavor that promises sustainable coal costs. This initiative is poised to significantly reduce our power production costs to below ₹ 45,000/- per metric ton in the foreseeable future.`]}/>
                    </div>
                    <Paragraph p={[`A key component of our success was the adoption of performance benchmarking techniques, allowing us to compare our performance against industry standards and identify opportunities for improvement. Additionally, we invested in the latest technologies and innovative methods to optimize our production processes. These advancements enabled us to enhance productivity, reduce downtime and drive down costs while maintaining product quality and meeting market demands. It also helped strengthen our financial position.`]}/>
                    <Heading theme={"blue"} fval={6} text={`Prudent investments to improve performance`}/>
                    <Paragraph p={[`At BALCO, we deploy funds judiciously to constantly improve our performance. We carry out market research, identify opportunities and consumer trends to develop a strategic investment plan tailored to fulfil our objectives. Besides, the integration of cutting- edge technology, such as inventory management systems and data analytics, has been integral to streamlining our operations.`]}/>
                    <div className='flex justify-content-between'>
                        <Callout2 value1={"₹ 12.42 crore"} value2={"Prudent investments to \u000a improve performance"}/>
                        <Callout2 value1={"₹ 6.33 crore"} value2={"nvestment made for \u000a technology adoption"}/>
                    </div>
                    <Paragraph p={[`We prioritize investments in infrastructure, including manufacturing facilities and distribution centers, to support our expansion endeavors. Collaborating closely with strategic partners, including suppliers and logistics providers, we continue to strengthen our supply chain network. Continuous performance evaluation enables us to fine-tune our strategies, ensures optimal resource allocation and maximizes return on investment.`]}/>
                    <img src="./capitals/fincap6.png" className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    )
}

export default FinancialCap