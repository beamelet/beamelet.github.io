import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

export default function Folio({ data }) {
  return (
    <Layout>
      <SEO title="Projects" />
      <div style={{ margin: `1rem auto`, maxWidth: 650 }}>
        <div style={{ marginTop: `80px` }}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Project key = {node.frontmatter.id}
              id={node.frontmatter.id}
              title={node.frontmatter.title}
              image={node.frontmatter.image}
              excerpt={node.frontmatter.excerpt}
              technologies={node.frontmatter.technologies}
              datasets={node.frontmatter.datasets} 
              approach={node.frontmatter.approach}
              partners={node.frontmatter.partners} 
              references={node.frontmatter.references} />
          ))}
        </div>
      </div>
    </Layout>        
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___id], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            image
            excerpt
            technologies
            datasets
            approach
            partners
            references
          }
        }
      }
    }
  }
`