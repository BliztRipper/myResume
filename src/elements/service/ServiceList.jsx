import React, {Fragment} from "react";
import { FiFeather , FiServer, FiTrello, FiFileText, FiUsers , FiMonitor } from "react-icons/fi";

const Services = [
    {
        icon: <FiFeather />,
        title: 'UX/UI Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiTrello />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiFileText />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiServer />,
        title: 'Hosting and Domain',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
]


const ServiceList = ({column,item}) => {
    const ServiceContent = Services.slice(0 , item);
    return (
        <Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </Fragment>
    );
}

export default ServiceList;
