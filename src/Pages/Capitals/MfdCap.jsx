import React from 'react'
import CapTemplate from '../../Components/CapitalTemplate/CapTemplate'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Callout2 from '../../Components/Callout/Callout2'

const MfdCap = () => {
  return (
    <div>
      <CapTemplate title={"Manufactured \u000A Capital"} w={75} src1={"./capitals/cap2sdg.png"} src2={"./capitals/mfd-cap-cov1.png"} src3={"./capitals/mfd-cap-cov2.png"} content={[`At BALCO, we are dedicated to achieving manufacturing excellence. We invest in cutting-edge technologies and benchmark our quality against industry standards to enhance our production processes. By embracing new-age technologies, we streamline costs, ensure efficiency and improve productivity.`]} />
      <div className='marginal row'>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-4'>
              <Heading theme={"blue"} fval={6} text={"Our manufacturing excellence"} />
              <Paragraph p={[`As an integrated aluminium manufacturer, we oversee every aspect of the production process, from bauxite extraction to smelting. We have steadily expanded our smelting capacity to 5,58,000 metric tons per annum. Also, we are currently in the process of expanding our capacity to more than 1 MTPA, a milestone we aim to accomplish by FY 2025. Our state- of-the-art manufacturing facility is located in Korba, Chhattisgarh and our bauxite mines, yielding premium- grade ore, are situated in Kawardha and Mainpat in Chhattisgarh.`]} />
              <img src="./capitals/mfd1.png" className='img-fluid' alt="" />
            </div>
            <div className='col-md-8'>
              <Heading theme={"blue"} fval={6} text={"Production highlights of FY 2024"} />
              <div className='row bg-patch'>
                <div className='col-md-6 '>

                  <p className='fs-6 p-2 border-bottom border-end border-dark'><span className='text-skyblue fw-bold'>Hot metal production</span> achieved a record estimated volume of 583 KT in FY 2024, surpassing FY 2023 by 14 KT, with a pot operating efficiency exceeding design capacity at 105%.</p>

                  <p className='fs-6 p-2 border-top border-end border-dark'>Recorded the best-ever estimated <span className='text-skyblue fw-bold'>wire rod production</span> of 183 KT in FY 2024, surpassing the previous best of 180 KT in FY 2019.</p>

                </div>
                <div className='col-md-6'>
                  <p className='fs-6 p-2 border-bottom border-start border-dark'>Achieved a record estimated <span className='text-skyblue fw-bold'>Value-Added Product (VAP) production</span> of 323 KT in FY 2024, surpassing the previous best of 286 KT in FY 2019.</p>
                  <p className='fs-6 p-2 border-top border-start border-dark'>Achieved the best-ever estimated <span className='text-skyblue fw-bold'>PFA (Alloy Ingot) production</span> of 79 KT in FY 2024, surpassing the previous best of 71 KT in FY 2023.</p>
                </div>
                <p className='fs-6 p-2 border-top border-dark'>Achieved the best-ever estimated <span className='text-skyblue fw-bold'>alloy rod production</span> of 10.8 KT in FY 2024, surpassing the previous best of 7.7 KT in FY 2023.</p>
                <img src="./capitals/mfd2.png" className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <Heading theme={"blue"} fval={6} text={"Asset management"} />
          <Paragraph p={[`At BALCO, we emphasize addressing future demand through a structured approach to asset optimization.Our objective is to enhance asset lifespan, amplify throughput and improve reliability in a cost-effective and sustainable manner. To realize these objectives, we have introduced a new asset management framework. It helps us systematically assess equipment performance and refine asset management practices to ensure operational excellence and maximize asset value.`]} />
          <img src="./capitals/mfd3.png" className='img-fluid' alt="" />
        </div>
        <div className='col-md-6'>
          <img src="./capitals/mfd4.png" className='img-fluid my-5' alt="" />
        </div>
        <div className='col-md-6 mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <Heading theme={'blue'} fval={6} text={`Ensuring highest quality standard`} />
              <Paragraph p={[`At BALCO, we strive to abide by the highest standards of quality and have implemented initiatives across our manufacturing processes to ensure the production of superior grades of rolled products. It has also helped us improve metal casting operations.`]} />
              <Heading theme={'blue'} fval={5} text={`ISO 9001:2015 \u000a Certified`} />
              <Heading theme={'green'} fval={6} text={`Rolled products`} />
              <Paragraph p={[`To ensure the quality of our rolled products, we employ several key initiatives. We conduct a special 100 MT FS casting during melt preparation in the furnace to improve product purity. Additionally, to minimize oil marks in aluminium sheets and coils, we have replaced coolant oil and tapered finished coils to drain excess oil. Further, to enhance surface quality, we have undertaken initiatives for the modification of Hot Rolled Plate pillars. The conveyor belts in the thick sheet line are also being modified to reduce scratches and pillar arm marks.`,
                `Moreover, our in-house laboratory analyzes the percentage of tramp oil in emulsion, enabling us to effectively manage contamination. Through timely analysis, we have successfully reduced the quantity of tramp oil used.`
              ]} />
              <Heading theme={'green'} fval={6} text={`Cast house operations`} />
              <Paragraph p={[`To ensure the highest quality standards of our casting metals, we have taken multiple measures. Firstly, we have stabilized our special grade Wire Rod by strictly adhering to Standard Operating Procedures (SOPs) from the furnace to the finished product. The introduction of Titanium for grain refinement has resulted in a 50% reduction of quality concerns related to Wire Rod during the fiscal year 2024.`]} />
            </div>
            <div className='col-md-6'>
              <Callout2 value1={"50%"} value2={'Reduction of complaints \u000a in FY 2024'} />
              <Paragraph p={[`Our transition to digital weigh bridges yielded a remarkable achievement of 100% weight capturing. It has resulted in the elimination of manual errors. Additionally, the digital capture of all process parameters enables us to promptly analyze and predict root causes in the event of any failure.`,
                `Moreover, our concerted efforts to enhance the purity of   aluminium and reduce the iron content in molten metal have significantly improved the quality of our alloy ingots. It has also enabled us to foray into the four-wheeler market.`]} />
              <Heading theme={'blue'} fval={5} text={`IATF 16949 \u000a Certified`} />
              <div className='bg-lorange p-1'>
                <Heading theme={'orange'} fval={5} text={`BALCO achieves ASI Performance Standard V3 Certification, a First in India`} />
                <Paragraph p={[`During FY 2024, BALCO has achieved the Aluminium Stewardship Initiative (ASI) Performance Standard V3 Certification, making us the first company in India to have received this certification. It reiterates our focus on responsible aluminium production.`]} />
              </div>
              <img src="./capitals/mfd7.png" className='img-fluid my-5' alt="" />
            </div>
          </div>


        </div>

        <div className='col-md-6'>
            <Heading theme={"blue"} fval={6} text={`Enhancing productivity through digitization`}/>
            <Paragraph p={[`At BALCO, we continue to adopt digital processes to drive productivity and innovation across our operations.`]} />
            <img src="./capitals/mfd6.png" className='img-fluid' alt="" />
        </div>
        <div className='col-md-6'>
            <img src="./capitals/mfd5.png" className='img-fluid' alt="" />
            <Heading theme={"blue"} fval={6} text={`Maintaining a sustainable supply chain`}/>
            <Paragraph p={[`At BALCO, we are dedicated to creating a sustainable supply chain by integrating environmental and ethical considerations into our procurement process. Through rigorous supplier selection criteria, including sustainability assessments and adherence to certifications and standards, we select supply chain partners who align with our values. Emphasizing circular economy principles, local sourcing and collaborative dialogue, we integrate sustainability across the supply chain. Additionally, we conduct risk assessments and maintain transparency to mitigate potential negative impacts and uphold our sustainability expectations.`]} />
            <Heading theme={"green"} fval={6} text={`Our supplier on-boarding process`}/>
            <img src="./capitals/mfd8.png" className='img-fluid w-75' alt="" />
        </div>

        <div className='col-md-6 mt-5'>
           <Heading theme={"green"} fval={6} text={`Higher efficiency through better logistics`}/> 
           <Paragraph p={[`At BALCO, we have always maintained a persistent focus on optimizing logistics costs by enhancing operational efficiency and encouraging sustainable practices.`,
          `In the power division, increased coal transportation via rail mode not only supported business sustainability but also optimized operational efficiency through reduced logistic expenses and production costs.`,
          `In the metal production process, we have achieved 100% Bogey Tank For Alumina Powder (BTAP) utilization which has led to the minimization of inland logistics costs of alumina.`,
          `Additionally, we have successfully reduced leakages resulting from demurrage costs associated with alumina vessel delays to zero, down from ₹9.9 crore in the previous fiscal year 2023.`
           ]}/>
           <img src="./capitals/mfd9.png" className='img-fluid' alt="" />
           <img src="./capitals/mfd11.png" className='img-fluid mt-3' alt="" />
        </div>
        <div className='col-md-6'>
        <Callout2 value1={'100%'} value2={"Leakage control led to \u000a ZERO demurrage cost"}/>
           <Paragraph p={[`Further, we have managed to reduce the cost of sea freight to $18 per metric ton in FY 2024 from $33 per metric ton in the previous year.`]}/>
           <Callout2 value1={'45%'} value2={"Reduction in the cost \u000a of sea freight"}/>
           <Heading theme={"green"} fval={6} text={`Improved availability of raw material`}/> 
           <Paragraph p={[`In the domain of power generation, there has been a significant upsurge in coal production during the fiscal year 2024. As a result, Coal India Limited (CIL) has presented abundant coal offerings through various coal e-auctions, resulting in ample procurement of coal aligned with plant requirements. This has culminated in a marked enhancement of our coal inventory, elevating it from a seven-day supply to an excess of fourteen days.`]}/>
           <img src="./capitals/mfd10.png" className='img-fluid' alt="" />
        </div>
      </div>
    </div>

  )
}

export default MfdCap