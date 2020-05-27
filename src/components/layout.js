import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Contact from "./contact"
import Menu from "./menu"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  ) 
  return (
    <div
      css={css`
        margin: 0 auto;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        padding-bottom: ${rhythm(2)};
        font-size: 100%;
      `}
    >
      <Link to={`/`}>
        <div
          css={css`
            display: inline-block;
            font-size: 0.75rem;
            float: left;
            padding-top: 3px;
          `}
        >
          {data.site.siteMetadata.title}
        </div>
      </Link>
      <Menu />
      {children}
      <Contact />
    </div>
  )
}
