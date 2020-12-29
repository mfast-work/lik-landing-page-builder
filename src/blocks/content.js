import React from "react"
import styled, { css } from "styled-components"
import rowSettings from "./row"

export function Content({ data, html }) {
  const centered = data.center ? data.center : false
  return (
    <StyledContent
      center={centered}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></StyledContent>
  )
}

const StyledContent = styled.div`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
`

export const contentRow = {
  label: "Content",
  key: "content-row",
  fields: [
    rowSettings,
    {
      name: "content",
      label: "Content",
      components: "markdown",
    },
  ],
}
