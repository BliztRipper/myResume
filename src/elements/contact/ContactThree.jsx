import React from "react";

const ContactThree = ({contactTitle, contactImages}) => {
    return(
        <div className="contact-form--1">
            <div className="container">
                <div className="row row--35 align-items-start">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="section-title text-left mb--50">
                            <h2 className="title">{contactTitle}</h2>
                            <p className="description">I am available for freelance work. Connect with me via email:
                                <a href="mailto:nonthegenocide@gmail.com"> nonthegenocide@gmail.com</a> </p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail mb_md--30 mb_sm--30">
                            <img src={`${contactImages}`} alt="trydo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactThree;