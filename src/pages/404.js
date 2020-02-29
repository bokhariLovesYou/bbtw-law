import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import Container from "react-bootstrap/Container"
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h1`
  font-family: "Roboto", serif;
`

const Span = styled.span`
  color: #e82e37;
`

const NotFoundPage = () => (
  <Layout stretchTop="pt-0">
    <SEO title="404 Not found" />
    <Container>
      <Wrapper className="text-center">
        <Heading>
          <Span>404.</Span> Not Found.
        </Heading>
      </Wrapper>
    </Container>
  </Layout>
)

export default NotFoundPage
