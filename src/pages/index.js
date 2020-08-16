import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"

import "./index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Helmet>
    <SEO title="David Mason | Portfolio" />

    <div className="column">
      <h1 style={{ fontSize: "6rem", fontFamily: "Alegreya Sans SC" }} className="header-color header-shadow">David Mason</h1>
      <h3 style={{ fontSize: "2rem" }} className="my-2"><i className="fas fa-globe-americas mr-4"></i> Atlanta, GA</h3>
      <h3 style={{ fontSize: "2rem" }} className="my-2"><i className="fas fa-envelope mr-4"></i> djmason.work@gmail.com</h3>
      <hr></hr>
    </div>

    <div className="column" style={{ marginTop: "3rem", marginBottom: "4rem" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem", fontFamily: "Alegreya Sans SC" }} className="header-color header-shadow">About</h1>
      <p style={{ fontSize: "2rem" }}>Quantitative analyst, computer programmer, web developer, math enthusiast</p>
    </div>

    <div className="column">
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem", fontFamily: "Alegreya Sans SC" }} className="header-color header-shadow">Projects</h1>
    </div>
    
    <Project 
      image={ data.projectImageStudious.childImageSharp.fluid }
      name="Studious"
      description="Studious is a platform for creating, reviewing, and sharing lessons which implements a Spaced Repetition System for efficient learning.
      Built with Django, PostgreSQL, and pure JavaScript."
      link="https://studious-carrot.herokuapp.com/"
    />
    <Project 
      image={ data.projectImageGallery.childImageSharp.fluid }
      name="Gallery"
      description="A Python image browser built with PySimpleGUI. 
      This provides large thumbnails and simple batch editing options like rescaling, sorting, selecting, and moving files that make it faster and easier to do common tasks."
      link="https://github.com/dmjz/gallery"
    />
    <Project 
      image={ data.projectImageBots.childImageSharp.fluid }
      name="Video Game Bots"
      description='A collection of botting programs for the video game Old School RuneScape. These are "color bots" 
      which read and search the game canvas and interact using human-like mouse and keyboard inputs. 
      Built in Python using PyAutoGui, PIL and Tkinter.'
      link="https://github.com/dmjz/osrs"
    />
    <Project 
      image={ data.projectImageNotebooks.childImageSharp.fluid }
      name="Notebooks"
      description="A collection of mathematical Jupyter notebooks exploring Cayley graphs and group theory,
      Monte Carlo methods, and fast multiplication algorithms."
      link="https://github.com/dmjz/notebooks"
    />
    <Project 
      image={ data.projectImageNightlife.childImageSharp.fluid }
      name="Nightlife"
      description="Search for local bars, restaurants, and more and see where everyone else is going. 
      Built with Node/Express and integrated with Twitter for authentication and Yelp to search local venues."
      link="https://night-life-djmot.herokuapp.com/"
    />
    <Project 
      image={ data.projectImageBLP.childImageSharp.fluid }
      name="Black-Litterman portfolio optimization"
      description="A Python implementation of the Black-Litterman model. Combine historical data with the user's
      expectations about future returns to estimate an optimal portfolio in a set of asset classes."
      link="https://github.com/dmjz/BLP"
    />
    <Project 
      image={ data.projectImageTextAnalysis.childImageSharp.fluid }
      name="Natural language processing of SEC filings"
      description="In this project we use word embedding to produce features from the natural language content of SEC filings and test the effect of these features on stock price movement. 
      We use Python for web scraping, topic analysis, and data visualization, and PyTorch to build and train a neural network for word embedding."
      link="https://github.com/dmjz/sec-embed"
    />
    <Project 
      image={ data.projectImageLife.childImageSharp.fluid }
      name="React Game of Life"
      description="An implementation of Conway's Game of Life using React. Pause the game, create a new pattern, and see how it evolves."
      link="https://codepen.io/djmot/full/gLObxz/"
    />
    <Project 
      image={ data.projectImageEmbeddings.childImageSharp.fluid }
      name="Orientable embeddings of Cayley graphs"
      description="Compute and count distinct embeddings of a given Cayley graph in the orientable surface of genus k.
      Implements an algorithm developed in my Master's thesis."
      link="https://github.com/dmjz/orientable-embeddings"
    />
    <Project 
      image={ data.projectImageCayleyGraphs.childImageSharp.fluid }
      name="Cayley graphs of Burnside groups"
      description="An algorithm to construct the Cayley graph for the Burnside groups B(2,n).
      For example, the image shows the graph of B(2,3), a group of order 27."
      link="https://github.com/dmjz/burnside-graphs"
    />

  </Layout>
)

export default IndexPage;

export const imageFragment = graphql`
  fragment imageFragment on File {
    childImageSharp {
      fluid(maxHeight: 800, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    projectImageStudious: file(relativePath: { eq: "studious.png" }) {
      ...imageFragment
    },
    projectImageGallery: file(relativePath: { eq: "gallery_screenshot.PNG" }) {
      ...imageFragment
    },
    projectImageBots: file(relativePath: { eq: "osrsbot.png" }) {
      ...imageFragment
    },
    projectImageNotebooks: file(relativePath: { eq: "cayley_graph_2.PNG" }) {
      ...imageFragment
    },
    projectImageNightlife: file(relativePath: { eq: "nightlife1.png" }) {
      ...imageFragment
    },
    projectImageBLP: file(relativePath: { eq: "blp.PNG" }) {
      ...imageFragment
    },
    projectImageTextAnalysis: file(relativePath: { eq: "model_arch.png" }) {
      ...imageFragment
    },
    projectImageLife: file(relativePath: { eq: "life.png" }) {
      ...imageFragment
    },
    projectImageEmbeddings: file(relativePath: { eq: "thesistable.png" }) {
      ...imageFragment
    },
    projectImageCayleyGraphs: file(relativePath: { eq: "b23graph.png" }) {
      ...imageFragment
    },
  }
`;