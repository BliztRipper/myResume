import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabsTwo = ({tabStyle}) =>{
    let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <p>User experience design - UX</p>
                                                    Delight the user and make it work with good experience.
                                                </li>
                                                <li>
                                                   <p> ReactJS, ReactNative - Development</p>
                                                    Build your product from world top tier front-end framework
                                                </li>
                                                <li>
                                                    <p>Progressive Web App - Development</p>
                                                    Make your website feels like an App with less time of development
                                                </li>
                                                <li>
                                                    <p>AntDesign, Tailwind, Styled Component and More - UI</p>
                                                    Design your delighted interface from high-quality UI library  
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <p>Mobile Sites Assessment Certification - Google</p> September 2019
                                               </li>
                                               <li>
                                                   <p>Finalist of TechJam Tomorrow Squad - Kasikorn Business Technology Group</p> September 2018
                                               </li>
                                               <li>
                                                   <p>How to Drive Actions Online, in Stores, and in Mobile Apps - Facebook</p> March 2018
                                               </li>
                                               <li>
                                                   <p>Finalist of TechJam Human-Centric AI - Kasikorn Business Technology Group</p> August 2017
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://lightnet.io/">Sr. Software Engineer<span> - Lightnet </span></a> August 2020 - Current
                                               </li>
                                               <li>
                                                   <a href="https://satang.com/">Sr. Front-end Engineer<span> - Satang </span></a> March 2020 - July 2020
                                               </li>
                                               <li>
                                                   <a href="https://www.ifyoucan.com/">Sr. Front-end Developer<span> - IfYouCan </span></a> March 2019- Feb 2020
                                               </li>
                                               <li>
                                                   <a href="https://www.ascendcorp.com/">Sr. Design Executive<span> - Ascend </span></a> March 2018- Feb 2019
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <p>X Series Program Certificate in Computational Thinking - Massachusetts Institute of Technology</p> 2020
                                               </li>
                                               <li>
                                                   <p>Professional Certificate in Design Thinking For Leading and Learning - Massachusetts Institute of Technology</p> 2017
                                               </li>
                                               <li>
                                                   <p>Certified Microsoft Innovative Educator - Microsoft Education</p> 2017
                                               </li>
                                               <li>
                                                   <p>B.A. Modern Management and Information Technology - Chiangmai University, Thailand</p> 2012
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



export default TabsTwo;