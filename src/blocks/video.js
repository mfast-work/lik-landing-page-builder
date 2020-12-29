import React from "react"
import rowSettings from "./row"

export function Video({ page, data }) {
  return <div></div>
}

export const videoRow = {
  label: "Video",
  key: "video-row",
  defaultItem: {
    settings: "",
  },
  fields: [
    rowSettings,
    {
      name: "videoId",
      label: "YouTube Video ID",
      component: "text",
    },
    {
      name: "size",
      label: "Size (Width)",
      description: "Max size: 100",
      component: "number",
    },
    {
      name: "shadow",
      label: "Drop Shadow",
      component: "toggle",
    },
  ],
}
