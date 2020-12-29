import React from "react"
import styled, { css } from "styled-components"
import rowSettings from "./row"


export function Title({ page, data }) {
  const centered = data.center ? data.center : false
  return (
    <>
      <StyledTitle center={centered}>
        {data && data.title ? data.title : page.title ? page.title : ""}
      </StyledTitle>
      {data && data.underline && <Hr center={centered} />}
    </>
  )
}

const StyledTitle = styled.h2`
  font-size: 2.2em;
  line-height: 1.2;
  word-spacing: 1px;
  font-weight: 700;

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`

const Hr = styled.hr`
  margin: 2.2rem 0;

  ${props =>
    props.center &&
    css`
      margin-left: auto;
      margin-right: auto;
    `};
`

export const headingRow = {
  label: "Heading",
  key: "heading-row",
  defaultItem: {
    settings: "",
    heading: "",
  },
  fields: [
    rowSettings,
    {
      name: "text",
      label: "Text",
      component: "text",
    },
    {
      name: "size",
      label: "Font Size",
      description: "Max size: 100",
      component: "number",
    },
    {
      name: "style",
      label: "Dark or light?",
      component: "toggle",
    },
  ],
}
