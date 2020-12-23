import React from "react"
import Icons from "./icons"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import Layout from "./layout"
import { graphql } from "gatsby"

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`
const Sidebar = styled.aside`
  .price {
    font-size: 2rem;
    color: #75ab00;
  }
  .agent {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #fff;
  }
`

export const query = graphql`
  query($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
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
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const Property = ({
  data: {
    allStrapiProperties: { nodes },
  },
}) => {
  const {
    name,
    description,
    bathrooms,
    price,
    garage,
    rooms,
    image,
    agents,
  } = nodes[0]
  console.log(image)
  return (
    <Layout>
      <h1>{name}</h1>
      <Content>
        <main>
          <Image fluid={image.sharp.fluid} />
          <p>{description}</p>
        </main>
        <Sidebar>
          <p className="price">${price}</p>
          <Icons bathrooms={bathrooms} garage={garage} rooms={rooms} />
          <div className="agent">
            <h2>Agent:</h2>
            <p>{agents.name}</p>
            <p>Phone: {agents.phone}</p>
            <p>Email: {agents.email}</p>
          </div>
        </Sidebar>
      </Content>
    </Layout>
  )
}

export default Property
