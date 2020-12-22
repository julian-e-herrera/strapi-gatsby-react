import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import heroCSS from "../css/hero.module.css"
const ImgBg = styled(BackgroundImage)`
  height: 300px;
`

const Find = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImgBg tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <div className={heroCSS.imagebg}>
        <h3 className={heroCSS.title}>Find You Dream's House</h3>
        <p>Since 1900</p>
      </div>
    </ImgBg>
  )
}

export default Find
