import React, { Component } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
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

export class TheFirmTemplate extends Component {
  render() {
    const {
      hero,
      sectionTwo,
      sectionThree,
      sectionFour,
      sectionFive,
    } = this.props.data.pageData.frontmatter
    const { globalCTA } = this.props.data.globalData.frontmatter
    return (
      <Layout>
        <SEO title="The Firm" />
        <Section LightYellow Small>
          <Graphic Pink Top Left Medium Rounded />
          <Container>
            <ContentBox className="text-lg-center" EquipWidth800 Centered>
              <TagLine Red>{hero.span}</TagLine>
              <HeadingOne Red HeroHeading>
                {hero.heading}
              </HeadingOne>
              <SubTitle Red HeroSubTitle Lg768>
                {hero.subtitle}
              </SubTitle>
            </ContentBox>
          </Container>
        </Section>
        <Section>
          <Container>
            <ContentBox>
              <TagLine Red>{sectionTwo.span}</TagLine>
              <HeadingTwo Large>{sectionTwo.heading}</HeadingTwo>
              {sectionTwo.description.map((elem, index) => {
                return (
                  <SubTitle HeroSubTitle key={index}>
                    {elem}
                  </SubTitle>
                )
              })}
            </ContentBox>
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
                    fluid={sectionThree.image.childImageSharp.fluid}
                    alt="Lahore"
                  />
                </FluidImageWrapper>
              </Col>
              <Col lg={6}>
                <ContentBox ColumnBox>
                  <TagLine Red>{sectionThree.span}</TagLine>
                  <HeadingTwo Large>{sectionThree.heading}</HeadingTwo>
                  {sectionThree.description.map((description, index) => {
                    return <SubTitle key={index}>{description}</SubTitle>
                  })}
                  <LinkButton Red>{sectionThree.buttonTitle}</LinkButton>
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
                    fluid={sectionFour.image.childImageSharp.fluid}
                    alt="Books"
                  />
                </FluidImageWrapper>
              </Col>
              <Col lg={{ span: 6, order: 1 }}>
                <ContentBox ColumnBoxHorizontallyInverted>
                  <TagLine Red>{sectionFour.span}</TagLine>
                  <HeadingTwo Large>{sectionFour.heading}</HeadingTwo>
                  {sectionFour.description.map((description, index) => {
                    return <SubTitle key={index}>{description}</SubTitle>
                  })}
                  <LinkButton Red>{sectionFour.buttonTitle}</LinkButton>
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section Purple ZeroSmallVerticalPadding>
          <BackgroundOverlay Left Pink />
          <Container>
            <Row className="align-items-md-center">
              <Col lg={6}>
                <FluidImageWrapper>
                  <Img
                    className="column-image"
                    fluid={sectionFive.image.childImageSharp.fluid}
                    alt="Kashmiri Girl"
                  />
                </FluidImageWrapper>
              </Col>
              <Col lg={6}>
                <ContentBox ColumnBox>
                  <TagLine Red>{sectionFive.span}</TagLine>
                  <HeadingTwo Large>{sectionFive.heading}</HeadingTwo>
                  {sectionFive.description.map((description, index) => {
                    return <SubTitle key={index}>{description}</SubTitle>
                  })}
                  <LinkButton Red>{sectionFive.buttonTitle}</LinkButton>
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
              <TagLine Red>{globalCTA.span}</TagLine>
              <HeadingTwo Large Red>
                {globalCTA.heading}
              </HeadingTwo>
              <SubTitle Red>{globalCTA.subtitle}</SubTitle>
              <Button className="mt-3">{globalCTA.buttonTitle}</Button>
            </ContentBox>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default TheFirmTemplate

export const query = graphql`
  query($path: String!) {
    pageData: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        template
        hero {
          span
          heading
          subtitle
        }
        sectionTwo {
          span
          heading
          description
        }
        sectionThree {
          span
          heading
          description
          buttonTitle
          buttonDestination
          image {
            childImageSharp {
              fluid(maxWidth: 1400, maxHeight: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        sectionFour {
          span
          heading
          description
          buttonTitle
          buttonDestination
          image {
            childImageSharp {
              fluid(maxWidth: 1400, maxHeight: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        sectionFive {
          span
          heading
          description
          buttonTitle
          buttonDestination
          image {
            childImageSharp {
              fluid(maxWidth: 1400, maxHeight: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    globalData: markdownRemark(frontmatter: { path: { eq: "/__data__" } }) {
      frontmatter {
        globalCTA {
          span
          heading
          subtitle
          buttonTitle
          buttonDestination
        }
      }
    }
  }
`
