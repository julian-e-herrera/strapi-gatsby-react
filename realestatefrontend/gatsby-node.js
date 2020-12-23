const urlSlug = require("url-slug")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPages {
        nodes {
          name
          id
        }
      }
      allStrapiProperties {
        nodes {
          name
          id
        }
      }
    }
  `)
  //   console.log(JSON.stringify(result.data.allStrapiProperties))
  if (result.errors) {
    reporter.panic("No records found", result.errors)
  }

  const pages = result.data.allStrapiPages.nodes
  const properties = result.data.allStrapiProperties.nodes
  pages.forEach(page => {
    actions.createPage({
      path: urlSlug(page.name),
      component: require.resolve("./src/components/pages.js"),
      context: {
        id: page.id,
      },
    })
  })

  properties.forEach(prop => {
    actions.createPage({
      path: urlSlug(prop.name),
      component: require.resolve("./src/components/property.js"),
      context: {
        id: prop.id,
      },
    })
  })
}
