import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'

const Cfomsg = () => {
    return (
        <div>
            <div className='grey-bg'>
                <div className='top-spacer marginal'>
                    <h1>CFO's message</h1>
                    <img className='img-fluid
                     m-auto lg-75 d-block' src="./homepage/bod3.png" alt="" />
                </div>
            </div>
            <div className='marginal'>
                <Heading theme={'dark'} fval={4} text={"Dear Shareholders,"} />
                <Heading theme={'dark'} fval={5} text={`I am delighted to present the robust operational and financial performance of BALCO for the financial year 2023-24. This year marks a significant leap forward, strengthening the foundation for our long- term growth. At BALCO, during FY 2023-24 we have surpassed our earlier KPI benchmarks, and we are all geared up for creating new records for the coming years and delivering increased stakeholder value.`} />

                <Paragraph p={[`During the financial year 2023-24, business delivered highest ever production volume of 583KT, Revenue of H13,141 crore with an EBITDA Margin of 20%. This uptick in EBITDA Margin reflects our rigour on capturing and capitalizing global demand for aluminium and upcoming market opportunities. Further, our adept management of operational excellence will pave a strong foundation for future growth.`,
                `Our persistent focus on enhancing operational efficiency, streamlining processes, and minimising waste generation culminated in achieving a production cost of H 1.66 Lacs/Tonne. This was achieved mainly on account of rigorous cost optimization strategies, responsible sourcing, augmenting the production of value-added products which enabled us to tap increased domestic market share.`,
                `We have leveraged advanced technologies and innovative methods to optimize our production processes, resulting in increased productivity, reduced downtime, and lowered costs— all while maintaining product quality and responsiveness to market demands. I am also pleased to share that during the current financial year, we secured a credit rating of CRISIL AA- for long-term borrowings. This showcases a stronger Balance Sheet with an optimum capital allocation strategy.`
                ]} />

                <Heading theme={'blue'} fval={5} text={"During the financial year 2023-24, business delivered highest ever production volume of 583 KT, Revenue of H13,141 crore with an EBITDA Margin of 20%. This uptick in EBITDA Margin reflects our rigour on capturing and capitalizing global demand for aluminium and upcoming market opportunities. Further, our adept management of operational excellence will pave a strong foundation for future growth."} />

                <Paragraph p={[`As we move forward, we are ramping up our production facilities to 1 Million Tonne Per Annum (MTPA) of aluminium production by the end of FY25. The success of this initiative will further solidify our position as the sixth-largest aluminium producer globally. `,

                `At BALCO, we are constantly investing in expanding our consumer base and reinforcing the supply chain through strategic planning and partnerships. This includes thorough market research to identify growth opportunities, developing a plan with specific goals and timelines, collaborating with suppliers, & logistics providers, and continuously evaluating performance to optimize resource allocation and maximize ROI.`,
                `Going forward, our growth strategy will remain centred on driving operational efficiency, cost-effectiveness, and market expansion, with a sharp focus on responsible sourcing, expansion of value-added product portfolio and tapping increased domestic market share. `,
                `We are also expediting the exploration and development of the Barra Coal Block to deliver sustainable coal costs and thereby bringing down Power Costs of production to ~$500/T in the near future.`,
                `The upcoming year and beyond are crucial, as it capitalizes on the efforts made during this period to achieve a performance that makes all of us proud. Moreover, these next few years mark a significant shift towards a greener and technologically advanced future, necessitating swift and agile action. I have complete confidence that our teams’ dedication and commitment will make this possible.`,
                `All the collaborative and channelized efforts will enable us to commit for delivering long term value to our customers, shareholders, and other ecosystem stakeholders.`,
                `I also thank you for your unwavering support during this period and look forward to your continued encouragement for our exciting journey ahead at BALCO.`
                ]} />

                
                <Heading theme={'dark'} fval={6} text={"Best regards,"} />
                <Heading theme={'blue'} fval={6} text={"Amit Gupta"} />
                <Heading theme={'dark'} fval={6} text={"Chief Financial Officer"} />
            </div>
        </div>
    )
}

export default Cfomsg