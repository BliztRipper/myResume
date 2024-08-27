import React, { Fragment } from "react"
import {
  FiFeather,
  FiFileText,
  FiMonitor,
  FiServer,
  FiTrello,
  FiUsers,
} from "react-icons/fi"

const Services = [
  {
    icon: <FiFeather />,
    title: "Design Thinking",
    description:
      "Transforms challenges into opportunities by Design Thinking. understanding users, prototyping ideas, and delivering impactful solutions.",
  },
  {
    icon: <FiTrello />,
    title: "Application Development",
    description:
      "Establishing an Online Presence Increasing Credibility and Trust Expanding Your Reach.",
  },
  {
    icon: <FiMonitor />,
    title: "Digital Solution",
    description:
      "Digital Solutions to Streamline Your Workflows. Automate tasks, improve data management, and boost productivity",
  },
  {
    icon: <FiFileText />,
    title: "Project Management",
    description:
      "Ensures Project Success, Minimizes Risks and Delays and Improves Team Collaboration and Communication.",
  },
  {
    icon: <FiServer />,
    title: "Cloud Technologist",
    description:
      "Assess Your Business to Increased Collaboration and Productivity Needs with Scalability and Flexibility.",
  },
  {
    icon: <FiUsers />,
    title: "Disciplined Agile Scrum Master",
    description:
      "Leading teams with the Agile framework to deliver complex projects efficiently",
  },
]

const ServiceList = ({ column, item }) => {
  const ServiceContent = Services.slice(0, item)
  return (
    <Fragment>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className={`${column}`} key={i}>
            <div className="service service__style--2">
              <div className="icon">{val.icon}</div>
              <div className="content">
                <h3 className="title">{val.title}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default ServiceList
