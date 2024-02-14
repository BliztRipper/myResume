import React, { Fragment } from "react";
import { FiFeather, FiFileText, FiMonitor, FiServer, FiTrello, FiUsers } from "react-icons/fi";

const Services = [
    {
        icon: <FiFeather />,
        title: 'UX/UI Design',
        description: 'Experience our website with intuitive, seamless UX/UI design that\'s elegant, engaging, and user-centric.'
    },
    {
        icon: <FiTrello />,
        title: 'Website Development',
        description: 'Establishing an Online Presence Increasing Credibility and Trust Expanding Your Reach and Increasing Sales.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'Enhanced User Experience and Engagement for Business Growth and Competitive Advantage.'
    },
    {
        icon: <FiFileText />,
        title: 'Project Management',
        description: 'Ensures Project Success, Minimizes Risks and Delays and Improves Team Collaboration and Communication.'
    },
    {
        icon: <FiServer />,
        title: 'Cloud Technology Consultant',
        description: 'Assess Your Business to Increased Collaboration and Productivity Needs with Scalability and Flexibility.'
    },
    {
        icon: <FiUsers />,
        title: 'Tech Solution Consulting',
        description: 'Identifying and Addressing Business Needs to Maximizing Technology Investments with Ensuring Alignment with Business Goals '
    },
]


const ServiceList = ({column,item}) => {
    const ServiceContent = Services.slice(0 , item);
    return (
        <Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <div className="service service__style--2">
                                <div className="icon">
                                    {val.icon}
                                </div>
                                <div className="content">
                                    <h3 className="title">{val.title}</h3>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fragment>
    );
}

export default ServiceList;
