import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
//import styled from "@emotion/styled"
import useProperties from "../hooks/use-properties"
import PropertyPreview from "./propertyPreview"

const PropertyList = () => {
  const data = useProperties()
  const [properties, saveProperties] = useState([])

  useEffect(() => {
    saveProperties(data)
  }, [data])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        our properties
      </h2>
      <ul>
        {properties.map(property => (
          <PropertyPreview key={property.id} property={property} />
        ))}
      </ul>
    </>
  )
}

export default PropertyList
