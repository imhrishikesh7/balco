import React from 'react'
import CapTemplate from '../../Components/CapitalTemplate/CapTemplate'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Callout2 from '../../Components/Callout/Callout2'
const HumanCap = () => {
    return (
        <div>
            <CapTemplate title={"Human \u000A Capital"} w={75} src1={"./capitals/cap4sdg.png"} src2={"./capitals/hum-cap-cov1.png"} src3={"./capitals/hum222.jpg"} content={[`With a strong focus on creating a people-centric workplace and promoting diversity, we have consistently endeavored to encourage a work culture that empowers talent and provides our people with opportunities for learning and skill development. It has not only enabled us to strengthen the foundation of a future-focused organization but has also enabled us to retain our competitive edge.`]} />
            <div className='marginal row'>
                <div className='col-md-6'>
                    <img src="./capitals/hum1.png" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6'>
                    <img src="./capitals/hum2.png" className='img-fluid' alt="" />
                </div>

                <div className='col-md-6 mt-5'>
                    <img src="./capitals/humi1.png" className='w-icon' alt="" />
                    <Heading theme={"blue"} fval={6} text={`Talent acquisition`} />
                    <Paragraph p={[`At BALCO, we are committed to fostering a culture of excellence through strategic talent acquisition and retention practices. Our recruitment processes are designed to meticulously identify and onboard individuals who embody our values and possess the requisite skills and aptitude for success.`,
                        `During FY 2024, we have recruited numerous fresh graduates from prestigious educational institutions. Candidates have been assessed solely based on merit, competencies and suitability for their respective job roles without any discrimination—ensuring fair employment opportunities. We prioritize comprehensive evaluations, encompassing both technical expertise and behavioral attributes.`,]} />
                    <div className='flex'>
                        <Callout2 value1={"168"} value2={"No. of people hired in FY 2024"} />
                        <Callout2 value1={"36%"} value2={"Female recruitment"} />
                    </div>
                    <div className='flex'>
                        <Callout2 value1={"4"} value2={"Specially-abled people hired"} />
                        <Callout2 value1={"17"} value2={"LQBTQ+ candidates hired"} />
                    </div>
                    <Paragraph p={[`In addition to our recruitment endeavors, we have instituted a comprehensive cross-business induction program, tailored for our management trainees. This initiative aims to provide them with a holistic understanding of the intricacies of the aluminium sector, thereby equipping them for success in their respective roles. We ensure that our`,
                        `new employees are introduced to the Company’s vision, mission and core values, as well as how our Employee Value Proposition is tailored to their needs. This serves as a guiding framework for them right from the moment they join our organization.`,
                        `Also, our focus extends beyond mere recruitment to the holistic development of our workforce. We have implemented targeted people practices, including skill enhancement initiatives and collaborative team- building exercises, under the guidance of senior management. We place special emphasis on integrating new hires seamlessly into our organization through tailored programs such as Campus to Corporate transition workshops, Outbound Learning Activities and Financial Planning seminars.`
                    ]} />
                    <Heading theme={"green"} fval={6} text={`Buddy Program`} />
                    <Paragraph p={[`Our Buddy Program pairs newcomers with team members who have completed a year at the organization. This initiative is designed to streamline the onboarding process, provide guidance and support to newcomers as they acclimate to new job roles.`]} />
                    <div className='flex'>
                        <Callout2 value1={"143"} value2={"Freshers onboarded for \u000a Buddy Program"} />
                        <Callout2 value1={"48%"} value2={"Gender diversity"} />
                    </div>
                    <div className='flex'>
                        <Callout2 value1={"10%"} value2={"Minority hiring from North-\u000aEast and Jammu & Kashmir"} />
                        <Callout2 value1={"11%"} value2={"Rank holders hired"} />
                    </div>
                    <Heading theme={"green"} fval={6} text={`Drishti`} />
                    <Paragraph p={[`Drishti is a specialized program tailored for lateral hires. This initiative includes structured induction sessions where senior leadership not only introduces but also offers feedback on the Key Performance Indicators (KPIs) relevant to assigned projects. This hands-on experience proves invaluable for lateral hires, fostering significant knowledge acquisition along their journey.`]} />
                </div>
                <div className='col-md-6 mt-5'>
                    <div className='flex'>
                        <Callout2 value1={"23"} value2={"Lateral hiring in FY 2024"} />
                        <Callout2 value1={"17.4%"} value2={"Gender diversity maintained\u000aduring lateral hiring"} />
                    </div>
                    <Heading theme={"green"} fval={6} text={`Retaining talent`} />
                    <Paragraph p={[`To retain top talent, we prioritize competitive compensation packages and comprehensive benefits, including performance-based bonuses. Our meticulously planned Township offers high-quality accommodation and nutritious meals at subsidized rates. Moreover, we focus on employee engagement through diverse initiatives, wellness programs and meaningful interactions with the leadership team. These efforts enhance employee experience, thereby fostering a sense of belonging to the organization.`]} />

                    <img src="./capitals/humi2.png" className='w-icon' alt="" />
                    <Heading theme={"blue"} fval={6} text={`Talent Management`} />
                    <Paragraph p={[`By nurturing and developing the skills and capabilities of our people, we strive to retain the best talent and sharpen our competitive edge.`]} />
                    <Heading theme={"green"} fval={6} text={`At BALCO, our talent management strategy encompasses practices aimed at maximizing the potential of our workforce:`} />
                    <img src="./capitals/hum3.png" className='img-fluid' alt="" />
                </div>

                <div className='col-md-6 mt-5'>
                    <img src="./capitals/humi3.png" className='img-fluid w-icon' alt="" />
                    <Heading theme={"blue"} fval={6} text={`Learning and Development`} />
                    <Paragraph p={[`To foster a culture of perpetual learning, we have instituted a range of training and development programs for our people. In the past year, we have conducted training sessions for improving the functional, technical, safety, statutory and behavioral competencies of our people.`]} />
                    <div className='bg-lorange p-2'>
                        <Heading theme={"orange"} fval={6} text={` training and development programs for our people. In the past year, we have conducted training sessions for improving the functional, technical, safety, statutory and behavioral competencies of our people. Contribution of Subject Matter Experts towards the Development of our Employees`} />
                        <Paragraph p={[`Within our organization, we enlist Subject Matter Experts (SMEs) possessing specialized expertise or skills in distinct domains. Their primary responsibility entails training fellow employees and facilitating the dissemination of knowledge. At present, we have identified 21 SMEs representing each Strategic Business Unit (SBU) across the organization.`]} />
                    </div>
                    <img src="./capitals/hum4.png" className='img-fluid w-75 mt-4' alt="" />
                    <img src="./capitals/hum5.png" className='img-fluid mt-4' alt="" />
                </div>
                <div className='col-md-6 mt-5'>
                    <img src="./capitals/hum8.png" className='img-fluid mt-4' alt="" />
                    <img src="./capitals/hum6.png" className='img-fluid mt-4' alt="" />
                    <img src="./capitals/hum7.png" className='img-fluid mt-4' alt="" />
                </div>

                <div className='col-md-6 mt-5'>
                    <img src="./capitals/humi4.png" className='img-fluid w-icon' alt="" />
                    <Heading theme={"blue"} fval={6} text={"Leadership Development"} />
                    <Paragraph p={[`At BALCO, we are committed to encouraging the growth of our employees, cultivating an environment conducive to unlocking their full potential and facilitating professional growth. We endeavor to nurture leadership qualities in promising individuals and offer training and development opportunities to hone their skills.`]} />
                    <Heading theme={"green"} fval={6} text={"Growth from Within"} />
                    <Paragraph p={[`Keeping Vedanta’s philosophy at the core, we nurture talent through the following initiatives.`]} />
                    <img src="./capitals/hum9.png" className='img-fluid' alt="" />
                </div>
                <div className='col-md-6 mt-5'>
                    <img src="./capitals/humi5.png" className='img-fluid w-icon' alt="" />
                    <Heading theme={"blue"} fval={6} text={"Identifying the best talent"} />
                    <Heading theme={"green"} fval={6} text={"Vedanta Leadership Development Program (VLDP)"} />
                    <Paragraph p={[`As our flagship initiative, VLDP strategically targets the identification and cultivation of top-tier talent from premier management and technology institutes. This tailored program aims to facilitate the growth of bright young minds within the organization. Through a properly designed curriculum encompassing induction sessions, cross-functional projects, job rotations and mentorship, VLDP provides participants exposure to our operations, enabling them to identify their areas of expertise and contribute effectively to business objectives.`]} />

                    <Heading theme={"green"} fval={6} text={"Project Horizon"} />
                    <Paragraph p={[`Project Horizon is designed for the development of promising Deputy Leaders, identified by the top management. Conducted over a period of six months and divided into four distinct phases—Selection & Induction, Assimilation & Orientation, Delivery & Development and Review Mechanism Framework—Horizon aims to leverage the strengths and capabilities of deputy leaders.`]} />

                    <Heading theme={"green"} fval={6} text={"Succession Planning"} />
                    <Paragraph p={[`At BALCO, succession planning is meticulously executed to create a strong leadership pipeline that is aligned to the organization’s objectives. This involves the identification and mapping of successors for key and critical positions, assessed through a structured criticality matrix process. Successors are categorized into immediate, near-term and long-term levels, with grooming efforts tailored to their development needs. Quarterly validation by the Talent Review Council ensures alignment with strategic objectives. Additionally, Competency Assessments, conducted by third- party assessors, help strengthen the succession planning process.`]} />

                    <Heading theme={"green"} fval={6} text={"ACT UP"} />
                    <Paragraph p={[`This is a flagship initiative, dedicated to the early identification of high-potential individuals within BALCO’s business landscape. Through a comprehensive approach utilizing tools such as case studies, group assignments, personal interviews and online personality profiling, the program aims to identify emerging leaders and align them to suitable roles within the organization.`]} />

                    <Heading theme={"green"} fval={6} text={"Green Diversity Workshop"} />
                    <Paragraph p={[`BALCO’s commitment to green growth and workplace diversity is underscored by the inaugural Green Diversity Workshop. This pioneering event provides our women employees with a platform to explore and assume leadership roles within the organization.`]} />
                </div>
               
                <div className='row'>
                <div className='col-md-6'>
                <Heading theme={"green"} fval={6} text={"Top Emerging Leaders Program"} />
                <Paragraph p={[`Designed to identify and nurture high-potential leaders across various businesses and functions, the Top Emerging Leaders Program emphasizes pedigree, performance and potential assessments. Through customized online leadership psychometric evaluations, selected leaders are poised to drive transformative outcomes across key business areas, supported by regular engagement with senior leadership.`]} />

                <Heading theme={"green"} fval={6} text={"Chairman’s/CEO’s Internal Growth Workshop"} />
                <Paragraph p={[`Spearheaded by the Chairman/CEO, this workshop focuses on identifying and grooming high-performing talent for future leadership roles. Through reviews and personal interaction, suitable roles and responsibilities are chosen for the candidates.`]} />
                </div>
               
                <div className='col-md-6'>

                <Heading theme={"green"} fval={6} text={"Job Rotation"} />
                <Paragraph p={[`BALCO’s proactive approach to talent development includes a Job Rotation Policy, tailored to meet the needs ofa dynamic workforce, predominantly comprising millennials. With a focus on periodic rotations every three to four years, employees are encouraged to explore diverse roles and functions in different locations.`]} />

                <Heading theme={"green"} fval={6} text={"Role Model Campus Minds"} />
                <Paragraph p={[`Recognizing the pivotal role of young talent in driving organizational growth, Vedanta introduces the Role Model Campus Minds initiative. Targeting individuals with three to seven years of experience, this program identifies and elevates high-performing leaders who exhibit the potential to assume senior leadership positions in future. Senior team members act as mentors and provide guidance to unlock the full potential of prospective candidates.`]} />
                </div>
                </div>
             
                {/* PAGE 5 */}
                <img src="./capitals/humi6.png" className='img-fluid w-icon3 mt-4' alt="" />
                <Heading theme={"blue"} fval={6} text={"Tech integration in HR"} />
                <Paragraph p={[`At BALCO, there has been a significant advancement in HR processes through the adoption of digitalization, facilitated by the introduction of a newly launched employee management portal.`]} />
                <div className='row'>
                    <div className='col-md-6'>
                        <Heading theme={"green"} fval={6} text={"Darwin Box"} />
                        <Paragraph p={[`Darwin Box, a cloud-based Human Resource (HR) management software, offers a comprehensive suite of HR modules, serving as a centralized platform for all our employees and business partners. This portal enables seamless access to employee performance, talent management, employee lifecycle and learning and development programs. It also features a 24/7 help desk facility.`]} />
                        <Heading theme={"green"} fval={6} text={"V-Milap"} />
                        <Paragraph p={[`At BALCO, we have introduced V-Milap as a centralized gateway to all applications, providing a user-friendly platform accessible anytime and anywhere. It incorporates a secure single sign-in for multiple applications and seamlessly integrates across mobile and web platforms. V-Milap grants real-time access to crucial information including workflow, Standard Operating Procedures (SOPs), policies, waste management protocols, organizational announcements, employee updates and addresses township issues, production and operational concerns within BALCO. This unified platform significantly enhances accessibility and operational efficiency for employees.`]} />
                        <img src="./capitals/humi7.png" className='img-fluid mt-4 w-icon' alt="" />
                        <Heading theme={"blue"} fval={6} text={"Diversity and inclusion"} />
                        <Paragraph p={[`Our dedication to being an equal opportunity employer guides our hiring practices, which prioritize recruiting candidates from diverse backgrounds. We uphold a non-discriminatory stance, refraining from bias based on caste, creed, religion, gender, nationality or physical capability. Emphasizing merit-based recruitment, we cultivate a balanced gender representation within our organization with a special emphasis towards hiring transgenders.`]}/>
                        <Heading theme={"green"} fval={6} text={"Progressive policies"} />
                        <Paragraph p={[`We have revised our D&I policy to enable women employees to take a 12-month sabbatical for postnatal support. Additionally, employees, including single parents and LGBTQIA+ individuals legally adopting a child under one year, are now eligible for a 12-week leave. Moreover, women employees now have the option to avail a ‘No Questions Asked’ work-from-home arrangement for a single day, every month, to prioritize their physical and mental well-being.`]}/>
                        <Callout2 value1={"20%"} value2={"Women employee at BALCO"}/>
                        <Heading theme={"green"} fval={6} text={"Diversity hiring project"} />
                        <Paragraph p={[`In line with our overarching vision of achieving a 35% gender diversity benchmark across the organization, we have launched a project focused on recruiting diversity leaders across Technical, Operations and Enabling functions. This initiative is geared towards enhancing the representation of women leaders within business units and the Senior Business Unit Executive Committee. The promotion of diversity and equal opportunities serves to cultivate varied perspectives, ignite innovation and inspire creativity. Consequently, this project has facilitated the acknowledgment and acceptance of women employees as valued counterparts, along with their male colleagues within the workforce.`]}/>
                    </div>
                    <div className='col-md-6'>
                        <img src="./capitals/hum10.png" className='img-fluid ' alt="" />
                        <img src="./capitals/humi8.png" className='img-fluid w-icon mt-4' alt="" />
                        <Heading theme={"blue"} fval={6} text={"Empowering women"} />
                        <Paragraph p={[`We prioritize initiatives aimed at enhancing gender equality and providing women employees with opportunities for growth, safety, and success.`]}/>
                        <img src="./capitals/hum11.png" className='img-fluid  mt-4' alt="" />
                        <img src="./capitals/hum12.png" className='img-fluid  mt-4' alt="" />
                    </div>
                </div>
                {/* PAGE 6 */}
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="./capitals/hum13.png" className='img-fluid  mt-4' alt="" />
                    </div>
                    <div className='col-md-6'>
                        <img src="./capitals/hum14.png" className='img-fluid  mt-4' alt="" />
                    </div>
                </div>
                {/* PAGE 7 */}
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="./capitals/hum15.png" className='img-fluid  mt-4' alt="" />
                    </div>
                    <div className='col-md-6'>
                        <img src="./capitals/hum16.png" className='img-fluid  mt-4' alt="" />
                    </div>
                </div>
                {/* PAGE 8 */}
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="./capitals/hum17.png" className='img-fluid  mt-4' alt="" />
                    </div>
                    <div className='col-md-6'>
                        <img src="./capitals/hum18.png" className='img-fluid  mt-4' alt="" />
                    </div>
                </div>
                {/* PAGE 9 */}
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="./capitals/hum19.png" className='img-fluid  mt-4' alt="" />
                    </div>
                    <div className='col-md-6'>
                        <img src="./capitals/hum20.png" className='img-fluid  mt-4' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HumanCap