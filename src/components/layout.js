import React, { Component } from "react"
import Header from "./header"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import styled from "styled-components"
const Main = styled.main`
  padding-top: 88px;
`

export class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Header />
        <Main className={this.props.stretchTop}>{children}</Main>
        <Footer />
      </>
    )
  }
}
export default Layout
