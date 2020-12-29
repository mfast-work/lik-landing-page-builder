import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import rowSettings from "./row"

export function Image({ data }) {
  return (
    data.image &&
    data.image.childImageSharp && (
      <ImageWrapper>
        <Img fluid={data.image.childImageSharp.fluid} />
      </ImageWrapper>
    )
  )
}

const ImageWrapper = styled.div`
  overflow: hidden;
`

export const imageRow = {
  label: "Image",
  key: "image-row",
  defualtItem: {
    settings: "",
  },
  fields: [
    rowSettings,
    {
      name: "file",
      label: "Image name",
      component: "text",
    },
    {
      name: "size",
      label: "Size (Width)",
      description: "Max size: 100",
      component: "number",
    },
    {
      name: "alt",
      label: "Alt Text",
      description: "Describe the image for SEO and screenreaders",
      component: "text",
    },
    {
      name: "shadow",
      label: "Drop Shadow",
      component: "toggle",
    },
  ],
}
