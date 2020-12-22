import { graphql, useStaticQuery } from "gatsby"

const useHome = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPages(filter: { name: { eq: "Home" } }) {
        nodes {
          id
          name
          content
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return data.allStrapiPages.nodes.map(init => ({
    name: init.name,
    content: init.content,
    image: init.image,
  }))
}

export default useHome
