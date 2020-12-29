export const rowSettings = {
  label: "Row Settings",
  name: "settings",
  component: "group",
  fields: [
    {
      name: "bgColor",
      label: "Background Color",
      component: "select",
      options: ["primary", "secondary"],
    },
    {
      name: "bgImage",
      label: "Background Image",
      description: "This overrides the background color if both are defined",
      component: "text",
    },
    {
      name: "fullWidth",
      label: "Full width?",
      component: "toggle",
    },
    {
      name: "yPadding",
      label: "Vertical Padding",
      component: "number",
    },
    {
      name: "xPadding",
      label: "Horizontal Padding",
      component: "number",
    },
  ],
}

export default rowSettings
