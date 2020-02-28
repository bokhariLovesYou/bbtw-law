import React, { Component } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroGraphic from "../images/svgs/hero-graphic.svg"
import CTAVector from "../images/svgs/cta-vector.svg"
// Img
import Img from "gatsby-image"

// Elements
import {
  Button,
  ContentBox,
  HeadingOne,
  SubTitle,
  TagLine,
  Section,
  HeadingTwo,
  Graphic,
  FluidImageWrapper,
  BackgroundOverlay,
  LinkButton,
} from "../components/Elements"
// Bootstrap
import { Container, Row, Col } from "react-bootstrap"

export class IndexPage extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <Layout>
        <SEO title="Home" />
        <Section LightRed HPHero>
          <Graphic Yellow Top Right Medium Rounded />
          <Graphic LightYellow Top Right Small Rounded />
          <Container>
            <Row>
              <Col lg={6}>
                <ContentBox>
                  <TagLine Red>Pakistan Law Redefined</TagLine>
                  <HeadingOne Red HeroHeading>
                    Lorem Ipsum Generator
                  </HeadingOne>
                  <SubTitle Red HeroSubTitle Lg768>
                    Livly focuses on delivering the best living and management
                    experiences through modern apartment technology.
                  </SubTitle>
                  <Button>Learn More</Button>
                </ContentBox>
              </Col>
              <Col lg={6}>
                <HeroGraphic className="hp--graphic" />
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Graphic Pink Left Bottom Medium Rounded />
          <Container>
            <ContentBox className="text-md-center" EquipWidth800 Centered>
              <TagLine Red>Pakistan Law Redefined</TagLine>
              <HeadingTwo Large>Lorem Ipsum Generator</HeadingTwo>
              <SubTitle HeroSubTitle className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </SubTitle>
            </ContentBox>
          </Container>
        </Section>
        <Section Dark ZeroSmallVerticalPadding>
          <BackgroundOverlay Left Pink />
          <Container>
            <Row className="align-items-md-center">
              <Col lg={6}>
                <FluidImageWrapper>
                  <Img
                    className="column-image"
                    fluid={data.imageOne.childImageSharp.fluid}
                    alt="Lahore"
                  />
                </FluidImageWrapper>
              </Col>
              <Col lg={6}>
                <ContentBox ColumnBox>
                  <TagLine Red>Pakistan Law Redefined</TagLine>
                  <HeadingTwo Large>Lorem Ipsum Generator</HeadingTwo>
                  <SubTitle>
                    Livly focuses on delivering the best living and management
                    experiences through modern apartment technology. Livly
                    focuses on delivering the best living and management
                    experiences through modern apartment technology.
                  </SubTitle>
                  <SubTitle>
                    Livly focuses on delivering the best living and management
                    experiences through modern apartment technology. Livly
                    focuses on delivering the best living and management
                    experiences through modern apartment technology.
                  </SubTitle>
                  <LinkButton Red>Learn more ›</LinkButton>
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section ZeroSmallVerticalPadding>
          <Graphic Pink Left Bottom Medium Rounded />
          <BackgroundOverlay Right Peach />
          <Container>
            <Row className="align-items-md-center">
              <Col lg={{ span: 6, order: 2 }}>
                <FluidImageWrapper HorizontallyInverted>
                  <Img
                    className="column-image"
                    fluid={data.imageThree.childImageSharp.fluid}
                    alt="Books"
                  />
                </FluidImageWrapper>
              </Col>
              <Col lg={{ span: 6, order: 1 }}>
                <ContentBox ColumnBoxHorizontallyInverted>
                  <TagLine Red>Pakistan Law Redefined</TagLine>
                  <HeadingTwo Large>Lorem Ipsum Generator</HeadingTwo>
                  <SubTitle>
                    Livly focuses on delivering the best living and management
                    experiences through modern apartment technology. Livly
                    focuses on delivering the best living and management
                    experiences through modern apartment technology.
                  </SubTitle>
                  <SubTitle>
                    Livly focuses on delivering the best living and management
                    experiences through modern apartment technology. Livly
                    focuses on delivering the best living and management
                    experiences through modern apartment technology.
                  </SubTitle>
                  <LinkButton Red>Learn more ›</LinkButton>
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section Dark ZeroSmallVerticalPadding>
          <BackgroundOverlay Left LightBlue />
          <Container>
            <Row className="align-items-md-center">
              <Col lg={6}>
                <FluidImageWrapper>
                  <Img
                    className="column-image"
                    fluid={data.imageTwo.childImageSharp.fluid}
                    alt="Kashmiri Girl"
                  />
                </FluidImageWrapper>
              </Col>
              <Col lg={6}>
                <ContentBox ColumnBox>
                  <TagLine Red>Pakistan Law Redefined</TagLine>
                  <HeadingTwo Large>Lorem Ipsum Generator</HeadingTwo>
                  <SubTitle>
                    Livly focuses on delivering the best living and management
                    experiences through modern apartment technology. Livly
                    focuses on delivering the best living and management
                    experiences through modern apartment technology.
                  </SubTitle>
                  <SubTitle>
                    Livly focuses on delivering the best living and management
                    experiences through modern apartment technology. Livly
                    focuses on delivering the best living and management
                    experiences through modern apartment technology.
                  </SubTitle>
                  <LinkButton Red>Learn more ›</LinkButton>
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section LightYellow>
          <Graphic DarkPink Left Bottom Medium Rounded />
          <CTAVector className="cta-vector" />
          <Container>
            <ContentBox EquipWidth>
              <TagLine Red>Pakistan Law Redefined</TagLine>
              <HeadingTwo Large Red>
                Lorem Ipsum Generator
              </HeadingTwo>
              <SubTitle Red>
                Livly focuses on delivering the best living and management
                experiences through modern apartment technology.
              </SubTitle>
              <Button className="mt-3">Get In Touch</Button>
            </ContentBox>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "lahore-three.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "kashmiri-girl.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "books.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
