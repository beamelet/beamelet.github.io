import React from "react"
import Layout from "../components/layout"
import about from "./about.module.css"
import SEO from "../components/seo"
import CV from "../../content/pdfs/CV_NutthaSirilertworakul_202005.pdf"

export default function About() {
  return (
      <Layout>
        <SEO title="About" />
        <div style={{ margin: `1rem auto`, maxWidth: 650 }}>  {/* , padding: `0 1rem` */}
        <div className={about.header}>
          <p>
            Hi,<br />
            I'm Beam.
          </p>
        </div>
        <div className={about.description}>
          <p>
            I built this site to collect a piece of my life and my eagerness 
            to answer various questions through data analytics.
          </p>
          <p>
            To me, data points are like millions of stars in the sky. When looking at a star,
            it is as it is. Yet, when connecting the stars, they become pictures, and a picture
            is worth a thousand words.
          </p>
          <p>
            Thus, I see data as a tool to help uncovering our complex societies. With comprehension
            in data at hand and creativity, good ideas and solutions will eventually arise
            to improve the quality of lives on the planet.
          </p>
          <p>
            Check out my CV/experience <a href={CV} type="application/pdf" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </div>    
        </div>
      </Layout>
  )
}