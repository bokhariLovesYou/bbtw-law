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
    const {
      hero,
      title,
      description,
    } = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <SEO title={title} description={description} />
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
            <Row className="align-items-lg-center">
              <Col lg={5} className="pr-lg-5">
                <ContentBox EquipWidth>
                  <TagLine Red>REQUEST A QUOTE</TagLine>
                  <HeadingTwo Large>Contact Us</HeadingTwo>
                  <SubTitle HeroSubTitle Lg768>
                    At Buttar, Bokhari & Tas we strongly believe in the
                    importance of pro-bono work for the profession, society and
                    promotion of the rule of law.
                  </SubTitle>
                  <SubTitle HeroSubTitle Lg768 className="mb-1">
                    <a className="external-link" href="tel:+923218521155">
                      Phone: +92 321 852 11 55
                    </a>
                  </SubTitle>
                  <SubTitle HeroSubTitle Lg768 className="mb-lg-1">
                    <a
                      className="external-link"
                      href="mailto:enquiries.bbt@outlook.com"
                    >
                      Mail: enquiries.bbt@outlook.com
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
