import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import certThree from '../../../public/assets/cert/cmie.png'
import certSeven from '../../../public/assets/cert/facebookCert.png'
import certTwo from '../../../public/assets/cert/MIT_Cert.png'
import certFive from '../../../public/assets/cert/mobileSiteCert.png'
import certFour from '../../../public/assets/cert/Ref_Letter2.jpg'
import certSix from '../../../public/assets/cert/TECHJAM2017-2018.png'
import certOne from '../../../public/assets/cert/xsiriesCert.png'

const TabsTwo = ({ tabStyle }) => {
	let tab1 = 'Main skills',
		tab2 = 'Awards',
		tab3 = 'Experience',
		tab4 = 'Education & Certification'
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
												<p>Solution Architect</p>
												Certified by Amazon Web Service (AWS)
											</li>
											<li>
												<p>Project Management</p>
												Certified by Project Management Institute (PMI)
											</li>
											<li>
												<p> ReactJS, ReactNative - Development</p>
												Build your product from world top tier front-end
												framework
											</li>
											<li>
												<p>Progressive Web App - Development</p>
												Make your website feels like an App with less time of
												development
											</li>
											<li>
												<p>User experience design - UX</p>
												Delight the user and make it work with good experience.
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
													href={certFive}
												>
													Mobile Sites Assessment Certification
													<span> - Google</span>
												</a>{' '}
												September 2019
											</li>
											<li>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href={certSix}
												>
													Finalist of TechJam Tomorrow Squad
													<span> - Kasikorn Business Technology Group</span>
												</a>{' '}
												September 2018
											</li>
											<li>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href={certSeven}
												>
													How to Drive Actions Online, in Stores, and in Mobile
													Apps<span> - Facebook</span>
												</a>{' '}
												March 2018
											</li>
											<li>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href={certSix}
												>
													Finalist of TechJam Human-Centric AI
													<span> - Kasikorn Business Technology Group</span>
												</a>{' '}
												August 2017
											</li>
										</ul>
									</div>
								</TabPanel>

								<TabPanel>
									<div className="single-tab-content">
										<ul>
											<li>
												<a href="https://www.ascendcorp.com/">
													Technicle Lead & Software Development Manager
													<span> - Ascend Corp </span>
												</a>{' '}
												Hanuary 2022 - March 2024
											</li>
											<li>
												<a href="https://www.gofive.co.th/">
													Lead Front-End Engineer
													<span> - GoFive Technology </span>
												</a>{' '}
												October 2021 - December 2021
											</li>
											<li>
												<a href="https://fillgoods.co/">
													Lead Front-End Engineer
													<span> - Fillgoods Technology </span>
												</a>{' '}
												July 2021 - September 2021
											</li>
											<li>
												<a href="https://lightnet.io/">
													Sr. Software Engineer<span> - Lightnet </span>
												</a>{' '}
												August 2020 - July 2021
											</li>
											<li>
												<a href="https://satang.com/">
													Sr. Front-end Engineer<span> - Satang </span>
												</a>{' '}
												March 2020 - July 2020
											</li>
											<li>
												<a href="https://www.ifyoucan.com/">
													Sr. Front-end Developer<span> - IfYouCan </span>
												</a>{' '}
												March 2019- Feb 2020
											</li>
											<li>
												<a href="https://www.ascendcorp.com/">
													Sr. Design Executive<span> - Ascend </span>
												</a>{' '}
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
													href="javascript:void(0)"
												>
													AWS Certified Cloud Practitioner
													<span> - Amazon Web Service (AWS) (PMI)</span>
												</a>{' '}
												2024 [In Progress]
											</li>
											<li>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href="javascript:void(0)"
												>
													Certified Associate in Project Management (CAPM)®
													<span> - Project Management Institute (PMI)</span>
												</a>{' '}
												2024 [In Progress]
											</li>
											<li>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href={certOne}
												>
													X Series Program Certificate in Computational Thinking
													<span> - Massachusetts Institute of Technology</span>
												</a>{' '}
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
												</a>{' '}
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
												</a>{' '}
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
												</a>{' '}
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
