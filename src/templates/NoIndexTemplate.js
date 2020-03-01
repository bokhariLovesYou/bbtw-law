import React, { Component } from "react"
import SEO from "../components/seo"

export class NoIndexTemplate extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <SEO title="Noindex, Nofollow" noIndex="noindex, nofollow" />
      </div>
    )
  }
}

export default NoIndexTemplate

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        template
      }
    }
  }
`
