import React from "react"
import rowSettings from "./row"

export function Features({ page, data }) {
  return <div></div>
}

export const featureRow = {
  label: "Features",
  key: "features-row",
  defaultItem: {
    settings: "",
    features: "",
  },
  fields: [
    rowSettings,
    {
      label: "Features",
      name: "features",
      component: "group-list",
      itemProps: (item) => ({
        key: item.id,
        label: item.heading,
      }),
      defaultItem: () => ({
        heading: "New Feature",
        id: Math.random().toString(36).substr(2, 9),
      }),
      fields: [
        {
          label: "Heading",
          name: "heading",
          component: "text",
        },
        {
          label: "Description",
          name: "description",
          component: "textarea",
        },
        {
          label: "Image",
          name: "image",
          component: "text",
        },
        {
          label: "Content Alignment",
          name: "alignment",
          component: "select",
          options: ["Left", "Right", "Center"],
        },
        {
          label: "Use Card style?",
          name: "matchCard",
          description: "May override alignment setting",
          component: "toggle",
        },
      ],
    },
  ],
}
