import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import profile from "./index-profile.module.css"
import intro from "./index-intro.module.css"
import SEO from "../components/seo"

import avatar from "../../static/profile.png"

const Profile = props => (
  <div className={profile.profile}>
    <div className={profile.inner}>  
      <img src={props.avatar} className={profile.avatar} alt="" />
      <h1 className={profile.name}>{props.name}</h1>
      <p className={profile.description}>{props.description}</p>
    </div>       
  </div>    
)

const Intro= props => (
  <div style={{marginBottom: `2rem`}}>
    <h2 className={intro.header}>{props.header}</h2>
    <p className={intro.excerpt}>{props.excerpt}</p>
  </div>
)

export default function Home({data}) {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ margin: `1rem auto`, maxWidth: 650 }}>
        <Profile
          avatar={avatar}
          name={data.site.siteMetadata.author}
          description="Product Manager | Consultant | Data Analyst"
        />
        <Intro 
          header="Hello, I am..."
          excerpt="a data-oriented individual who answers business and societal questions through data analytics."/>
        <Intro 
          header="I do..."
          excerpt="data analytics and consultancy for tech companies and help businesses grow and maintain their customers."/>
        <Intro 
          header="I aspire..."
          excerpt="to understand the complexity of our socities and to improve the quality of lives on the planet."/>
        <Intro 
          header="I stay..."
          excerpt="curious and courageous."/>
      </div> 
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }  
  }
`

