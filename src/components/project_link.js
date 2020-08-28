import React from "react"

const ProjectLink = (props) => (
  <a href={props.link}>
    <i className={`${props.iconClass} mr-5`} style={{ fontSize: "2.3rem"}}></i>
  </a>
)

export default ProjectLink