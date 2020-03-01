import React, { Component } from "react"
import SEO from "../components/seo"

export class NoIndexTemplate extends Component {
  render() {
    return (
      <div>
        <SEO title="Noindex, Nofollow" noIndex="noindex, nofollow" />
      </div>
    )
  }
}

export default NoIndexTemplate
