import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const ListIcons = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`
const Icons = ({ rooms, garage, bathrooms }) => {
  const { icons } = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)
  const imageIcons = icons.edges
  return (
    <>
      <ListIcons>
        <li>
          <img src={imageIcons[2].node.publicURL} alt="icon bath" />
          <p>{bathrooms}</p>
        </li>
        <li>
          <img src={imageIcons[1].node.publicURL} alt="icon garage" />
          <p>{garage}</p>
        </li>
        <li>
          <img src={imageIcons[0].node.publicURL} alt="icon rooms" />
          <p>{rooms}</p>
        </li>
      </ListIcons>
    </>
  )
}

export default Icons
