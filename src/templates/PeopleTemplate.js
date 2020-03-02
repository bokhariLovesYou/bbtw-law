import React, { Component } from "react"
import { Link } from "gatsby"
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

export class PeopleTemplate extends Component {
  render() {
    const {
      title,
      description,
      hero,
      sectionTwo,
      sectionThree,
      sectionFour,
      sectionFive,
    } = this.props.data.pageData.frontmatter
    const { globalCTA } = this.props.data.globalData.frontmatter
    return (
      <Layout>
        <SEO title={title} description={description} />
        <Section Dark Small>
          {/* <Graphic Yellow Top Right Medium Rounded /> */}
          <Graphic Gray ExtremeLeft Small Rounded />
          <Graphic DarkGreen Left Medium Rounded />
          <Container>
            <ContentBox className="text-lg-center" EquipWidth800 Centered>
              <TagLine Red>{hero.span}</TagLine>
              <HeadingOne HeroHeading>{hero.heading}</HeadingOne>
              {hero.description.map((elem, index) => {
                return (
                  <SubTitle
                    className={
                      hero.description.length === index + 1 ? "" : "mb-0"
                    }
                    HeroSubTitle
                    key={index}
                  >
                    {elem}
                  </SubTitle>
                )
              })}
            </ContentBox>
          </Container>
        </Section>
        <Section>
          <Graphic Pink Top Right Medium Rounded />
          <Graphic LightYellow Top Right Small Rounded />
          <Container>
            <Row className="align-items-lg-center">
              <Col lg={6}>
                <ContentBox>
                  <Img
                    className="column-image column-image--small"
                    fluid={sectionTwo.image.childImageSharp.fluid}
                    alt="Lahore"
                  />
                </ContentBox>
              </Col>
              <Col lg={6}>
                <ContentBox>
                  <ContentBox ColumnBox Small>
                    <TagLine Red>{sectionTwo.span}</TagLine>
                    <HeadingTwo Large>{sectionTwo.heading}</HeadingTwo>
                    {sectionTwo.description.map((description, index) => {
                      return <SubTitle key={index}>{description}</SubTitle>
                    })}
                    <Link to={sectionTwo.buttonDestination}>
                      <LinkButton Red>{sectionTwo.buttonTitle}</LinkButton>
                    </Link>
                  </ContentBox>
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Graphic Pink Top Left Medium Rounded />
          <Graphic Greenish Top ExtremeLeft Small Rounded />
          <Container>
            <Row className="align-items-lg-center">
              <Col lg={{ span: 6, order: 2 }}>
                <ContentBox>
                  <Img
                    className="column-image column-image--small"
                    fluid={sectionThree.image.childImageSharp.fluid}
                    alt="Lahore"
                  />
                </ContentBox>
              </Col>
              <Col lg={{ span: 6, order: 1 }}>
                <ContentBox Small ColumnBoxHorizontallyInverted>
                  <TagLine Red>{sectionThree.span}</TagLine>
                  <HeadingTwo Large>{sectionThree.heading}</HeadingTwo>
                  {sectionThree.description.map((description, index) => {
                    return <SubTitle key={index}>{description}</SubTitle>
                  })}
                  <Link to={sectionThree.buttonDestination}>
                    <LinkButton Red>{sectionThree.buttonTitle}</LinkButton>
                  </Link>
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section LightYellow>
          <Container>
            <ContentBox>
              <TagLine Red>{sectionFour.span}</TagLine>
              <HeadingTwo Large>{sectionFour.heading}</HeadingTwo>
              {sectionFour.description.map((elem, index) => {
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
          <BackgroundOverlay Left Peach />
          <Container>
            <Row className="align-items-md-center">
              <Col lg={6}>
                <FluidImageWrapper>
                  <Img
                    className="column-image"
                    fluid={sectionFive.image.childImageSharp.fluid}
                    alt="Lahore"
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
                  <Link to={sectionFive.buttonDestination}>
                    <LinkButton Red>{sectionFive.buttonTitle}</LinkButton>
                  </Link>
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
              <Link to={globalCTA.buttonDestination}>
                <Button type="button" className="mt-3">
                  {globalCTA.buttonTitle}
                </Button>
              </Link>
            </ContentBox>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default PeopleTemplate

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
          description
        }
        sectionTwo {
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
