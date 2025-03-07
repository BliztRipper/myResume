import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

import certGCDL from "../../../public/assets/cert/certCDL.pdf"
import certGAC from "../../../public/assets/cert/GACertified.jpg"
import certMSAF from "../../../public/assets/cert/certMSAF.pdf"
import certMSAIF from "../../../public/assets/cert/certMSAIF.pdf"
import certMSSCIF from "../../../public/assets/cert/certMSSCIF.pdf"
import certCCP from "../../../public/assets/cert/certCCP.pdf"
import certFCAC from "../../../public/assets/cert/FCAC.pdf"
import certCAPM from "../../../public/assets/cert/CAPM2024.png"
import certThree from "../../../public/assets/cert/cmie.png"
import certTwo from "../../../public/assets/cert/MIT_Cert.png"
import certACP from "../../../public/assets/cert/PMI_Certfication.png"
import certFour from "../../../public/assets/cert/Ref_Letter2.jpg"
import certSix from "../../../public/assets/cert/TECHJAM2017-2018.png"
import certOne from "../../../public/assets/cert/xsiriesCert.png"
import certIBMDTP from "../../../public/assets/cert/IBMDTP.pdf"
import DASSM from "../../../public/assets/cert/DASSM.pdf"
import AIF from "../../../public/assets/cert/AIF.pdf"
import PMOCP from "../../../public/assets/cert/PMO.pdf"
import PMIPMOCP from "../../../public/assets/cert/PMIPMOCP.pdf"
import DAVSC from "../../../public/assets/cert/DAVSC.pdf"
import CAMHIL from "../../../public/assets/cert/CAMHIL.jpg"

const TabsTwo = ({ tabStyle }) => {
  let tab1 = "Main skills",
    tab2 = "Awards & Certification",
    tab3 = "Experience",
    tab4 = "Education"
  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  <Tab>{tab2}</Tab>
                  <Tab>{tab3}</Tab>
                  <Tab>{tab4}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <p>High Impact Leadership</p>
                        Seeking to improve leadership abilities and drive change within your organizations
                      </li>
                      <li>
                        <p>Project Management</p>
                        Ensures everything on time, on Budget and prevent any
                        risk
                      </li>
                      <li>
                        <p>Disciplined Agile Consultant</p>
                        Focuses on guiding enterprises through context-driven, pragmatic agile transformations
                      </li>
                      <li>
                        <p>Organization Transformation</p>
                        Driving comprehensive change initiatives to enhance
                        business agility
                      </li>
                      <li>
                        <p>Software Development</p>
                        Transform ideas into scalable, high-performance software solutions.
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href={DAVSC}>
                          Disciplined Agile Value Stream Consultant (DAVSC)®
                          <span> - Project Management Institute (PMI)</span>
                        </a>{" "}
                        Febuary 2025
                      </li>
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href={PMIPMOCP}>
                          PMO Certified Professional (PMI-PMOCP)®
                          <span> - Project Management Institute (PMI)</span>
                        </a>{" "}
                        Febuary 2025
                      </li>
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href={PMOCP}>
                          PMO Certified Practitioner (PMO-CP)®
                          <span> - Project Management Institute (PMI)</span>
                        </a>{" "}
                        January 2025
                      </li>
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href={AIF}>
                          AWS Certified: AI Practitioner
                          <span> - Amazon Web Service</span>
                        </a>{" "}
                        August 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={DASSM}
                        >
                          Disciplined Agile Senior Scrum Master (DASSM)®
                          <span> - Project Management Institute (PMI)</span>
                        </a>{" "}
                        August 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certIBMDTP}
                        >
                          IBM Certified Enterprise Design Thinking -
                          Practitioner, Co-Creator and Team Essentials for AI
                          <span> - IBM</span>
                        </a>{" "}
                        August 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certFCAC}
                        >
                          Fortinet Certified Associate Cybersecurity
                          <span> - Fortinet</span>
                        </a>{" "}
                        August 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certMSSCIF}
                        >
                          Microsoft Certified: Security, Compliance, and
                          Identity Fundamentals
                          <span> - Microsoft</span>
                        </a>{" "}
                        July 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certMSAIF}
                        >
                          Microsoft Certified: Azure AI Fundamentals
                          <span> - Microsoft</span>
                        </a>{" "}
                        July 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certGCDL}
                        >
                          Google Certified: Google Cloud Digital Leader
                          <span> - Google</span>
                        </a>{" "}
                        June 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certGAC}
                        >
                          Google Certified: Google Analytic Certified
                          <span> - Google</span>
                        </a>{" "}
                        June 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certMSAF}
                        >
                          Microsoft Certified: Azure Fundamentals
                          <span> - Microsoft</span>
                        </a>{" "}
                        May 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certCCP}
                        >
                          AWS Certified: Cloud Practitioner
                          <span> - Amazon Web Service</span>
                        </a>{" "}
                        May 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certACP}
                        >
                          Certified Agile Practitioner (PMI-ACP)®
                          <span> - Project Management Institute (PMI)</span>
                        </a>{" "}
                        March 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certCAPM}
                        >
                          Certified Associate in Project Management (CAPM)®
                          <span> - Project Management Institute (PMI)</span>
                        </a>{" "}
                        Febuary 2024
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certSix}
                        >
                          Finalist of TechJam Tomorrow Squad
                          <span> - Kasikorn Business Technology Group</span>
                        </a>{" "}
                        September 2018
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="https://www.capco.com/">
                          Senior Scrum Master Consultant
                          <span> - CAPCO </span>
                        </a>{" "}
                        September 2024 - Now
                      </li>
                      <li>
                        <a href="https://www.invitracehealth.com/">
                          Technicle Product Manager
                          <span> - InvitraceHealth </span>
                        </a>{" "}
                        April 2024 - August 2024
                      </li>
                      <li>
                        <a href="https://www.ascendcorp.com/">
                          Technicle Lead & Software Development Manager
                          <span> - Ascend Corp </span>
                        </a>{" "}
                        January 2022 - March 2024
                      </li>
                      <li>
                        <a href="https://www.gofive.co.th/">
                          Lead Front-End Engineer
                          <span> - GoFive Technology </span>
                        </a>{" "}
                        October 2021 - December 2021
                      </li>
                      <li>
                        <a href="https://fillgoods.co/">
                          Lead Front-End Engineer
                          <span> - Fillgoods Technology </span>
                        </a>{" "}
                        July 2021 - September 2021
                      </li>
                      <li>
                        <a href="https://lightnet.io/">
                          Sr. Software Engineer<span> - Lightnet </span>
                        </a>{" "}
                        August 2020 - July 2021
                      </li>
                      <li>
                        <a href="https://satang.com/">
                          Sr. Front-end Engineer<span> - Satang </span>
                        </a>{" "}
                        March 2020 - July 2020
                      </li>
                      <li>
                        <a href="https://www.ifyoucan.com/">
                          Sr. Front-end Developer<span> - IfYouCan </span>
                        </a>{" "}
                        March 2019- Feb 2020
                      </li>
                      <li>
                        <a href="https://www.ascendcorp.com/">
                          Sr. Design Executive<span> - Ascend </span>
                        </a>{" "}
                        March 2018- Feb 2019
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={CAMHIL}
                        >
                          Leading Sustainability: High Impact Leadership (Studying)
                          <span> - University of Cambridge</span>
                        </a>{" "}
                        2025
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certOne}
                        >
                          X Series Program Certificate in Computational Thinking
                          <span> - Massachusetts Institute of Technology</span>
                        </a>{" "}
                        2020
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certTwo}
                        >
                          Professional Certificate in Design Thinking For
                          Leading and Learning
                          <span> - Massachusetts Institute of Technology</span>
                        </a>{" "}
                        2017
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certThree}
                        >
                          Certified Microsoft Innovative Educator
                          <span> - Microsoft Education</span>
                        </a>{" "}
                        2017
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={certFour}
                        >
                          B.A. Modern Management and Information Technology
                          <span> - Chiangmai University, Thailand</span>
                        </a>{" "}
                        2012
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  )
}

export default TabsTwo
