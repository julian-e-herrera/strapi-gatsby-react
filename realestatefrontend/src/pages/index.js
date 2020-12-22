import React from "react"
import Layout from "../components/layout"
import useHome from "../hooks/use-home"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import heroCSS from "../css/hero.module.css"
import Find from "../components/find"
import PropertyList from "../components/propertyList"
const ImageBack = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const home = useHome()
  const { name, content, image } = home[0]

  return (
    <Layout>
      <main>
        <ImageBack tag="section" fluid={image.sharp.fluid} fadeIn="soft">
          <div className={heroCSS.imagebg}>
            <h1 className={heroCSS.title}>
              Exclusive Houses rental and franchise
            </h1>
          </div>
        </ImageBack>
        <div
          css={css`
            max-width: 880px;
            margin: 0 auto;
          `}
        >
          <h1>{name}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {content}
          </p>
        </div>
      </main>
      <Find />
      <PropertyList />
    </Layout>
  )
}

export default Index
