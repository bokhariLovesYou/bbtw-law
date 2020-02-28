import React, { Component } from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import { ContentBox } from "./Elements"

const FooterContents = styled.footer`
  width: 100%;
  background-color: #fff;
  padding: 1rem 0;
  p {
    margin-bottom: 0;
    color: rgb(197, 197, 197);
    font-size: 0.9rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
      "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`

export class Footer extends Component {
  render() {
    return (
      <>
        <FooterContents>
          <Container>
            <ContentBox className="text-center">
              <p>{`© ${new Date().getFullYear()} BBT Law`}</p>
            </ContentBox>
          </Container>
        </FooterContents>
      </>
    )
  }
}

export default Footer
