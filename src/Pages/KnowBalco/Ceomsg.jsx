import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'

const Ceomsg = () => {
    return (
        <div>
            <div className='grey-bg'>
                <div className='top-spacer marginal'>
                    <h1>Letter from CEO </h1>
                    <img className='img-fluid
                     m-auto lg-75 d-block' src="./homepage/bod2.png" alt="" />
                </div>
            </div>
            <div className='marginal'>
                <Heading theme={'dark'} fval={4} text={"Dear Shareholders,"} />
                <Heading theme={'dark'} fval={5} text={`Our evolution into a leading global manufacturer of high-quality aluminum has been characterized by enduring partnerships spanning decades and an unwavering commitment to advancing sustainable and inclusive progress. Guided by a robust governance framework, transparent business practices, and a strong financial footing, we have forged our identity as an organization of distinction.`} />

                <Paragraph p={[`At BALCO, we continually adapt and innovate, recognizing aluminum’s pivotal role in fostering sustainable development across various sectors. This proactive approach has not only fueled our business growth but also contributed to India’s prominence on the world stage.`]} />

                <Heading theme={'blue'} fval={5} text={"The year in review"} />
                <Paragraph p={[`During the financial year, despite challenging market conditions, BALCO successfully reduced its production costs through operational efficiency, prudent financial, ethical business, governance practices to deliver the best stakeholders’ value. Leveraging our best-in-class state-of-the-art facility we achieved a production level of 583 KT, surpassing the previous record for highest production, thus demonstrating our unwavering commitment to meeting market demands efficiently.`,
                `Moreover, our steadfast efforts resulted in a significant reduction in production costs to H 1.66 Lac/Tonne, further bolstering our revenue growth to H 13,141 Cr. To address the diverse needs of the market and strengthen our market presence, we are introducing a variety of new products and enhancing our production capabilities.`
                ]} />

                <Heading theme={'blue'} fval={5} text={"Technology and digitalization"} />
                <Paragraph p={[`Through our proactive investment in technological innovations, of Industry 4.0 like Artificial Intelligence (AI), the Internet of Things (IoT) and Digital Twins, I am pleased to share that we have significantly enhanced our operational efficiency while minimizing our environmental footprint and reducing operational costs. `,
                    `The commissioning of the 400 KV GIS marks a notable achievement in our infrastructure development. Furthermore, digitalization efforts, including the Service Level Agreement and Process scorecard, promise substantial savings of 0.25 Mn$/ Annum. The remarkable reduction in FG vehicle turnaround time (TAT) from 15 hours to 5 hours demonstrates our relentless pursuit of efficiency resulting in building confidence in our stakeholders on our supply chain management.`,
                ]} />

                <Heading theme={'blue'} fval={5} text={"Sustainable value creation"} />
                <Paragraph p={[`Our commitment to sustainability is ingrained in every aspect of our operations. We recognize the pressing need to address environmental concerns and have hence undertaken a slew of initiatives aimed at reducing our carbon footprint and promoting responsible business practices.`,
                `A significant step in this direction has been the adoption of Electric Vehicles (EVs) for both Light Motor Vehicles (LMVs) and forklifts within our facilities. We have installed 6 EV Forklifts promoting reduction of tCO2 emissions.`,
                `Speaking of our manufacturing processes, we have made substantial changes to curb our environmental impact. This includes investment in graphitized pots, to minimize energy consumption.`,
                `To further bolster our environmental stewardship, we are increasing the proportion of renewable energy in our fuel mix. With signed agreements for 218 MW of green energy, we are striving to achieve a 30% renewable mix by 2030.`
                ]} />
                <Heading theme={'blue'} fval={5} text={"Progressing responsibly"} />
                <Paragraph p={[`BALCO’s ongoing expansion projects, including smelter capacity from 0.58 MTPA to 1 MTPA are poised to revolutionize the history of the Aluminium Industry. Among these transformative endeavors is the establishment of India’s first-ever 500 kA Potline, integrated within a fully comprehensive plant setup. This ambitious undertaking aims to position BALCO as the 2   largest aluminum producer in the nation, by consolidating capacity at a single location.`,
                `Furthermore, this expansion initiative significantly bolsters BALCO’s Value- Added Products (VAP) capacity, now reaching an impressive 103%. This achievement is accompanied by the integration of advanced facilities such as the Integrated Alumina Handling System, CP Coke Handling, and Finished Goods Handling Systems. These additions are strategically designed to minimize the carbon footprint, marking the initial strides towards producing Green Aluminium. `,
                `BALCO’s enhanced production capacity will be accompanied by additions of new products - Billets, Aluminium Composite Panel, Foil stock, Closure stock, Circle & Hard Alloys coils, plates of 5XXX series with its state of art production facility at Korba.`,
                `Additionally, enhancements in quality and capacity are evident in the Rolled Products segment, now boasting a capacity of 180 ktpa. The introduction of a new Billet facility, with a capacity of 420 ktpa, further enriches the BALCO product portfolio, positioning the company as a leader in innovation and sustainability within the aluminum industry.`
                ]} />

                <Heading theme={'blue'} fval={5} text={"Dedicated to social responsibility"} />
                <Paragraph p={[`As a responsible corporate citizen, we make sincere efforts to encourage community development. In addition, through BALCO CSR, we try to achieve our greater objective of creating sustainable value for all our clients and stakeholders. Our success over the years is an outcome of the long-term relationships that we have built with our stakeholders. These enduring relationships with our people, clients, value chain partners and stakeholders form our social and relationship capital.`,
                    `Our prioritization revolves around developing CSR projects in education, health, sustainable livelihoods, women’s empowerment, and environmental sustainability. These initiatives are tailored to address local challenges and opportunities, showcasing our commitment to societal welfare and environmental stewardship. Our CSR efforts have benefited 1.69 Lakh individuals this year, reflecting our dedication to community impact.`,
                    `Including 17 transgender and 4 specially- abled individuals in our inclusivity roadmap underscores our commitment to diversity and equal opportunities. We actively encourage their recruitment through specific policies and provide sensitivity training to hiring managers and interviewers. Regular diversity training fosters understanding and respect, while specialized sessions ensure effective collaboration with these groups, cultivating an inclusive workplace culture.`,
                    `In the past year, our societal contributions received notable recognition. We secured the top position in sustainability leadership in the S&P Global CSA 2023 (DJSI). Additionally, our emphasis on safety garnered prestigious awards, including a Gold Award from Grow Care India and an International Safety Award from the British Safety Council. `,
                    `On the social impact front, we were honoured with the Governor’s Scroll of Honor for CSR Excellence and the 6   Edition ICC Social Impact Award for initiatives such as reducing child mortality and organizing the largest single-day blood donation camp in Chhattisgarh.`,
                    `BALCO is the first Primary Smelter in India to develop Alloy Wire Rods in 1981 series, thereby transforming the Conductor-Cable Industry by offering excellent strength and corrosion resistant, suitable for diverse environments.`
                ]} />
                <Heading theme={'blue'} fval={5} text={"Crafting our way forward"} />
                <Paragraph p={[`At BALCO, we’re dedicated to forging a brighter, more sustainable future. Looking forward, we hold a bullish outlook on the future of aluminum. With the surge in infrastructure projects, ‘Make in India’ initiatives, and increasing demand in defense, aerospace, and electric vehicles, we see ample opportunities to bolster domestic production and play a pivotal role in India’s growth trajectory.`,
                    `This journey towards a self-sufficient aluminium industry demands the dedication of our partners, colleagues and stakeholders. Together, we will continue to forge ahead, shaping a more sustainable future powered by aluminium.`,
                    `In closing, I extend my sincere gratitude to our stakeholders, patrons, the entire BALCO team, and our esteemed Board for their invaluable support and guidance. `
                ]} />
                
                <Heading theme={'dark'} fval={6} text={"Best regards,"} />
                <Heading theme={'blue'} fval={6} text={"Rajesh Kumar "} />
                <Heading theme={'dark'} fval={6} text={"Chief Executive Officer & Whole Time Director"} />
            </div>
        </div>
    )
}

export default Ceomsg