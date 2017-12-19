import React, { Component } from 'react'; 
import './App.css';
import resume from './resume.json';
import Experience from './Experience.jsx';
import Languages from './Languages.jsx';
import Educations from './Educations.jsx';
import Certificates from './Certificates.jsx';
import Skill from './Skill.jsx';

class App extends Component {
  renderExperiences(){
    let resultsArray = [];
    resume.experiences.map((item, i) => {
      resultsArray.push(<Experience item={item} key={i}/>)
    });
    return resultsArray;
  }
  renderLanguages(){
    let resultsArray = [];
    resume.languages.map((item, i) => {
      resultsArray.push(<Languages item={item} key={i}/>)
    });
    return resultsArray;
  }
  renderEducations(){
    let resultsArray = [];
    resume.education.map((item, i) => {
       resultsArray.push(<Educations item={item} key={i}/>) 
    });
    return resultsArray;
  }
  renderCertificates(){
    let resultsArray = [];
    resume.certificate.map((item, i) => {
       resultsArray.push(<Certificates item={item} key={i}/>) 
    });
    return resultsArray;
  }
  renderSkill(){
    let resultsArray = [];
    resume.skills.map((item, i) => {
      resultsArray.push(<Skill item={item} key={i}/>)  
    });
    return resultsArray;
  }
  renderInterests(){
    let resultsArray = [];
    resume.interests.map((item, i) => {
      resultsArray.push(<li key={i}>{item}</li>); 
    });
    return resultsArray;
  }
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">{resume.tagline}</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto:{resume.emailURL}">{resume.email}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href="">{resume.phone}</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank" rel="noopener noreferrer">{resume.website}</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href={resume.linkedinURL} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href={resume.githubURL} target="_blank" rel="noopener noreferrer">{resume.github}</a></li>
                    <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank" rel="noopener noreferrer">{resume.twitter}</a></li>
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                {this.renderEducations()}
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                {this.renderLanguages()}
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderInterests()}
                </ul>
                
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                <div className="summary">
                    <p>{resume.careerProfile}</p>
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
                
                {this.renderExperiences()}
                
            </section>
            
            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Certificate and Reference letter</h2>
                <div className="intro">
                    <p>All certificate that i archive</p>
                </div>

                {this.renderCertificates()}
            </section>
            
            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset">        

                    {this.renderSkill()}
                </div>  
            </section>
            
        </div>
    </div>
    );
  }
}

export default App;
