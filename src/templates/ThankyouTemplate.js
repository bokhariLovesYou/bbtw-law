import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

// Elements
import {
  ContentBox,
  HeadingOne,
  SubTitle,
  TagLine,
  Section,
  Graphic,
  LinkButton,
} from "../components/Elements"
// Bootstrap
import Container from "react-bootstrap/Container"

export class ThankyouTemplate extends Component {
  render() {
    const { hero } = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <SEO title="The Firm" />
        <Section Peach Small>
          <Graphic Yellow Top Right Medium Rounded />
          <Graphic LightYellow Top Right Small Rounded />
          <Container>
            <ContentBox className="text-lg-left">
              <TagLine Red>{hero.span}</TagLine>
              <HeadingOne Red HeroHeading>
                {hero.heading}
              </HeadingOne>
              {hero.description.map((elem, index) => {
                return (
                  <SubTitle
                    className={
                      hero.description.length === index + 1 ? "" : "mb-0"
                    }
                    Red
                    HeroSubTitle
                    key={index}
                  >
                    {elem}
                  </SubTitle>
                )
              })}
              <SubTitle>
                <Link to="/">
                  <LinkButton Red>Go Back to Home ›</LinkButton>
                </Link>
              </SubTitle>
            </ContentBox>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default ThankyouTemplate

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
          description
        }
      }
    }
  }
`
