import React from "react"
import rowSettings from "./row"

export function CTA({ page, data }) {
  return <div></div>
}
export const ctaRow = {
  label: "Image and Text",
  key: "cta",
  fields: [
    rowSettings,
    {
      label: "Sizing Ratio",
      name: "ratio",
      component: "select",
      options: ["1:1", "1:2", "2:1", "2:3", "3:2"],
    },
    {
      label: "Image",
      name: "image",
      component: "text",
    },
    {
      label: "Alt Text",
      name: "alt",
      component: "text",
      description: "Describe the image for SEO and screen readers",
    },
    {
      label: "Image on right?",
      name: "imageRight",
      component: "toggle",
    },
    {
      label: "Content",
      name: "content",
      component: "markdown",
    },
    {
      name: "button",
      label: "Show button?",
      component: "toggle",
    },
    {
      name: "buttonLabel",
      label: "Button Text",
      component: "text",
    },
    {
      name: "buttonTarget",
      label: "Button Link",
      component: "text",
    },
    {
      name: "buttonTheme",
      label: "Light or Dark Button?",
      component: "toggle",
    },
  ],
}
