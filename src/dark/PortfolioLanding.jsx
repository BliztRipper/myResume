import React from "react"
import { FiChevronUp } from "react-icons/fi"
import ScrollToTop from "react-scroll-up"
import TextLoop from "react-text-loop"

import aboutMeImg from "../../public/assets/images/about/aboutme.png"
import contactus from "../../public/assets/images/about/contactus.png"
import bgHeader from "../../public/assets/images/bg/headerbg2.png"
import Helmet from "../component/common/Helmet"
import FooterTwo from "../component/footer/FooterTwo"
import HeaderThree from "../component/header/HeaderThree"
import ContactThree from "../elements/contact/ContactThree"
import PortfolioList from "../elements/portfolio/PortfolioList"
import ServiceList from "../elements/service/ServiceList"
import TabTwo from "../elements/tab/TabTwo"

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
]
const PortfolioLanding = () => {
  let title = "About Me",
    description =
      "I have started my coding (HTML, CSS, JS) when I was 13 years old. And I am experienced in Agile methodology with a strong background in both technical and managerial roles. I'm involved in the technology industry over a decade and have been assigned to many roles like Agile Coach, Lead Software Engineer, Project Manager, and Tech Speaker"
  return (
    <div className="active-dark">
      <Helmet
        pageTitle="BliztTech"
        pageDesc="BliztTech is the software house made by coffee and my 2 cats. We provide online solution for you and give your customer with great online experience"
      />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image"
              style={{ backgroundImage: "url(" + bgHeader + ")" }}
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h1
                        style={{ textShadow: "3px 3px 2px rgba(0, 0, 0, 1)" }}
                        className="title"
                      >
                        Hi, I’m Arnon <br />
                        <TextLoop>
                          <span>Software Developer.</span>
                          <span>Project Manager.</span>
                          <span>Value Stream Agile Coach.</span>
                          <span>Cloud & AI Practitioner.</span>
                          <span>and Cat Person.</span>
                        </TextLoop>{" "}
                      </h1>
                      <h2
                        style={{ textShadow: "3px 3px 2px rgba(0, 0, 0, 1)" }}
                      >
                        based in Thailand.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={aboutMeImg}
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Awesome Skills</h2>
                  <p>
                    There are many particular set of skills I can provide to you
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Project</h2>
                    <p>
                      There are many variations of website and mobile
                      applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {/* <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/blog"><span>View More</span></a>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree contactImages={contactus} contactTitle="Hire Me." />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  )
}

export default PortfolioLanding
