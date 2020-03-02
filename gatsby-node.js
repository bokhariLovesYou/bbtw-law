const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const templates = {
    HomepageTemplate: path.resolve("src/templates/HomepageTemplate.js"),
    TheFirmTemplate: path.resolve("src/templates/TheFirmTemplate.js"),
    ContactTemplate: path.resolve("src/templates/ContactTemplate.js"),
    ThankyouTemplate: path.resolve("src/templates/ThankyouTemplate.js"),
    PeopleTemplate: path.resolve("src/templates/PeopleTemplate.js"),
    NoIndexTemplate: path.resolve("src/templates/NoIndexTemplate.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    // Create Pages
    const pages = res.data.allMarkdownRemark.edges
    pages.forEach(page => {
      createPage({
        path:
          page.node.frontmatter.template === "HomepageTemplate"
            ? `/`
            : `${page.node.frontmatter.path}`,
        component: (() => {
          if (page.node.frontmatter.template === "HomepageTemplate") {
            return templates.HomepageTemplate
          } else if (page.node.frontmatter.template === "TheFirmTemplate") {
            return templates.TheFirmTemplate
          } else if (page.node.frontmatter.template === "NoIndexTemplate") {
            return templates.NoIndexTemplate
          } else if (page.node.frontmatter.template === "ContactTemplate") {
            return templates.ContactTemplate
          } else if (page.node.frontmatter.template === "ThankyouTemplate") {
            return templates.ThankyouTemplate
          } else if (page.node.frontmatter.template === "PeopleTemplate") {
            return templates.PeopleTemplate
          }
        })(),
      })
    })
  })
}
