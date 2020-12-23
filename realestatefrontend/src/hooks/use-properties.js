import { graphql, useStaticQuery } from "gatsby"

const useProperties = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProperties {
        nodes {
          name
          description
          id
          bathrooms
          price
          garage
          rooms
          category {
            name
          }
          agents {
            name
            phone
            email
          }
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return data.allStrapiProperties.nodes.map(prop => ({
    name: prop.name,
    description: prop.description,
    bathrooms: prop.bathrooms,
    price: prop.price,
    garage: prop.garage,
    rooms: prop.rooms,
    category: prop.category,
    id: prop.id,
    agents: prop.agents,
    image: prop.image,
  }))
}

export default useProperties
