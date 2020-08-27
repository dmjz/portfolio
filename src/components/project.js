import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectLink = (props) => (
  <a href={props.link}>
    <i className={`${props.iconClass} mr-5`} style={{ fontSize: "2.3rem"}}></i>
  </a>
)

const Project = (props) => (
  <div className="columns is-vcentered is-variable is-8" style={{ marginBottom: "4rem" }}>
      <div className="column">
        <Img 
          fluid={props.image} 
          style={{
            boxShadow: "-2px 4px 8px #d1bb92, 2px 4px 8px #d1bb92",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="column">
        <a href={props.link}>
          <h1 
            style={{ 
              fontSize: "3rem", 
              marginTop: "1rem", 
              marginBottom: "1rem" 
            }}
          >{props.name}</h1>
        </a>
        <p style={{ fontSize: "1.5rem" }}>{props.description}</p>
        <div className="column project-links">
          {props.websiteLink
            ? <ProjectLink link={props.websiteLink} iconClass="fas fa-external-link-alt" />
            : null
          }
          {props.githubLink
            ? <ProjectLink link={props.githubLink} iconClass="fab fa-github" />
            : null
          }
        </div>
      </div>
    </div>
)

export default Project
