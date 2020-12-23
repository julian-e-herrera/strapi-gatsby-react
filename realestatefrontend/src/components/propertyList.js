import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import listPropCSS from "../css/listProp.module.css"
import useProperties from "../hooks/use-properties"
import PropertyPreview from "./propertyPreview"
import useFilter from "../hooks/use-filter"
const PropertyList = () => {
  const data = useProperties()
  const [properties] = useState(data)
  const [filtered, saveFiltered] = useState([])

  const { category, FilterUI } = useFilter()

  useEffect(() => {
    if (category) {
      const filtProp = properties.filter(
        prop => prop.category.name === category
      )
      saveFiltered(filtProp)
    } else {
      saveFiltered(properties)
    }
  }, [category, properties])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Our properties
      </h2>
      {FilterUI()}
      <ul className={listPropCSS.properties}>
        {filtered.map(property => (
          <PropertyPreview key={property.id} property={property} />
        ))}
      </ul>
    </>
  )
}

export default PropertyList
