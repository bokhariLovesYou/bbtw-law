import React, { Component } from "react"
import Layout from "../components/layout"
import Form from "../components/Form"
import { graphql } from "gatsby"
import SEO from "../components/seo"
// Img

// Elements
import {
  ContentBox,
  HeadingOne,
  SubTitle,
  TagLine,
  Section,
  HeadingTwo,
  Graphic,
} from "../components/Elements"
// Bootstrap
import { Container, Row, Col } from "react-bootstrap"

export class ContactTemplate extends Component {
  render() {
    const { hero } = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <SEO title="The Firm" />
        <Section Peach Small>
          <Graphic Pink Top Right Medium Rounded />
          <Container>
            <ContentBox className="text-lg-center" EquipWidth800 Centered>
              <TagLine Red>{hero.span}</TagLine>
              <HeadingOne Red HeroHeading>
                {hero.heading}
              </HeadingOne>
            </ContentBox>
          </Container>
        </Section>
        <Section Small>
          <Container>
            <Row>
              <Col lg={5}>
                <ContentBox EquipWidth>
                  <TagLine Red>{hero.span}</TagLine>
                  <HeadingTwo Large>{hero.heading}</HeadingTwo>
                  <SubTitle HeroSubTitle Lg768>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et.
                  </SubTitle>
                  <SubTitle HeroSubTitle Lg768>
                    <a className="external-link" href="tel:+923234718555">
                      Phone: +92 323 4718 555
                    </a>
                  </SubTitle>
                </ContentBox>
              </Col>
              <Col lg={7}>
                <ContentBox>
                  <Form action="/thank-you" />
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default ContactTemplate

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        template
        hero {
          span
          heading
        }
      }
    }
  }
`
