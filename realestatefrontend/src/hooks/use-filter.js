import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "@emotion/styled"

const Form = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`
const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  fon-family: "Lato", sans-serif;
`
const useFilter = () => {
  const [category, saveCategory] = useState("")

  const result = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        nodes {
          name
          id
        }
      }
    }
  `)

  const categories = result.allStrapiCategories.nodes
  const FilterUI = () => (
    <Form>
      <Select onChange={e => saveCategory(e.target.value)} value={category}>
        <option value="">--Filter--</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </Select>
    </Form>
  )
  return {
    category,
    FilterUI,
  }
}

export default useFilter
