import React from "react"
import rowSettings from "./row"

export function ButtonRow({ page, data }) {
  return <div></div>
}

export const buttonRow = {
  label: "Button",
  key: "button-row",
  defaultItem: {
    settings: "",
    button: "",
  },
  fields: [
    rowSettings,
    {
      name: "label",
      label: "Label",
      component: "text",
    },
    {
      name: "target",
      label: "Link",
      component: "text",
    },
    {
      name: "style",
      label: "Dark or light?",
      component: "toggle",
    },
    {
      name: "size",
      label: "Font Size",
      description: "Max size: 100",
      component: "number",
    },
  ],
}
