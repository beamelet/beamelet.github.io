import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import custom404 from "./custom404.module.css"

export default function Custom404() {
  return (
      <Layout>
        <div style={{ margin: `1rem auto`, maxWidth: 650, padding: `0 1rem` }}>  
        <div className={custom404.header}>
          <p>
            Page not found
          </p>
        </div>
        <div className={custom404.description}>
          <p>
            The page you requested could not be found.
          </p>
          <p>
            <Link to={`/`}>Go Back</Link>
          </p>
          </div>    
        </div>
      </Layout>
  )
}