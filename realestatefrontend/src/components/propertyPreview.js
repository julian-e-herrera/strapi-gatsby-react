import React from "react"
import Icons from "./icons"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { Link } from "gatsby"
import urlSlug from "url-slug"
const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  background-color: #75ab00;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
`

const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
  }
`

const Content = styled.div`
  padding: 2rem;
  h3 {
    font-family: "Lato", sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }
  .price {
    font-size: 2rem;
    color: #75ab00;
  }
`

const PropertyPreview = ({ property }) => {
  const { name, bathrooms, price, garage, rooms, image } = property
  console.log(image)
  return (
    <Card>
      <Image fluid={image.sharp.fluid} />
      <Content>
        <h3>{name}</h3>
        <p className="price">${price}</p>
        <Icons bathrooms={bathrooms} garage={garage} rooms={rooms} />

        <Button to={urlSlug(name)}>Show Property</Button>
      </Content>
    </Card>
  )
}

export default PropertyPreview
