import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Project = (props) => (
  <div className="columns is-vcentered is-variable is-8" style={{ marginBottom: "4rem" }}>
      <div className="column">
        <a href={props.link}>
          <Img 
            fluid={props.image} 
            style={{ 
              boxShadow: "-2px 4px 8px #d1bb92, 2px 4px 8px #d1bb92",
              borderRadius: "8px",
            }}
          />
        </a>
      </div>
      <div className="column">
        <a href={props.link}>
          <h1 style={{ fontSize: "3rem" }}>{props.name}</h1>
        </a>
        <p style={{ fontSize: "1.5rem" }}>{props.description}</p>
      </div>
    </div>
)

export default Project
