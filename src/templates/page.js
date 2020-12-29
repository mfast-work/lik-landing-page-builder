import React from "react"
import { graphql } from "gatsby"
import { Paper } from "../components/style"
import { Form, formRow } from "../blocks/form"
import { Title, headingRow } from "../blocks/title"
import { Image, imageRow } from "../blocks/image"
import { Content, contentRow } from "../blocks/content"
import { featureRow, Features } from "../blocks/features"
import { ButtonRow, buttonRow } from "../blocks/button"
import { Video, videoRow } from "../blocks/video"
import { columnsRow, Columns } from "../blocks/columns"
import { CTA, ctaRow } from "../blocks/cta"
import { htmlRow } from "../blocks/html"
import { PageLayout } from "../components/pageLayout"
import { usePlugin } from "tinacms"
import { useJsonForm } from "gatsby-tinacms-json"

export default function Page({ data }) {
  const [page, form] = useJsonForm(data.page, PageForm)
  usePlugin(form)
  const blocks = page.blocks ? page.blocks : []

  return (
    <PageLayout page={page}>
      <Paper>
        {blocks &&
          blocks.map(({ _template, ...data }, i) => {
            switch (_template) {
              case "headingRow":
                return <Title page={page} data={data} />
              case "imageRow":
                return <Image data={data} />
              case "formRow":
                return <Form form={data} />
              case "ctaRow":
                return <CTA data={data} />
              case "videoRow":
                return <Video data={data} />
              case "featureRow":
                return <Features data={data} />
              case "buttonRow":
                return <ButtonRow data={data} />
              case "columnRow":
                return <Columns data={data} />
              case "contentRow":
                if (data.content && page.childrenPagesJsonBlockMarkdown[i])
                  return (
                    <Content
                      data={data}
                      html={
                        page.childrenPagesJsonBlockMarkdown[i]
                          .childMarkdownRemark.html
                      }
                    />
                  )
                break
              default:
                return true
            }
          })}
      </Paper>
    </PageLayout>
  )
}

const PageForm = {
  label: "Page",
  fields: [
    {
      label: "Hero",
      name: "hero",
      description: "Settings for the hero of the page",
      component: "group",
      fields: [
        {
          name: "showHero",
          component: "toggle",
          label: "Show Hero?",
        },
        {
          name: "heading",
          label: "Heading",
          component: "text",
        },
        {
          name: "content",
          label: "Hero Content",
          component: "markdown",
        },
        {
          name: "cta",
          label: "Button Text",
          component: "text",
        },
        {
          name: "ctaTarget",
          label: "Button Link",
          component: "text",
        },
        {
          name: "image",
          label: "Image",
          component: "text",
        },
        {
          name: "imageBg",
          label: "Use image as background?",
          component: "toggle",
        },
        {
          name: "contentAlign",
          label: "Content Alignment",
          component: "select",
          options: ["Left", "Right", "Center"],
        },
        {
          name: "imageAlign",
          label: "Image Alignment",
          component: "select",
          options: ["Left", "Right", "Top", "Bottom"],
        },
      ],
    },
    {
      label: "Page Sections",
      name: "Sections",
      component: "blocks",
      templates: {
        features: featureRow,
        heading: headingRow,
        content: contentRow,
        button: buttonRow,
        image: imageRow,
        video: videoRow,
        form: formRow,
        columns: columnsRow,
        "image-with-text": ctaRow,
        html: htmlRow,
      },
    },
  ],
}

export const pageQuery = graphql`
  query($path: String!) {
    page: pagesJson(path: { eq: $path }) {
      title
      displayTitle
      hero {
        headline
        textline
        large
        overlay
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ctas {
          label
          link
          primary
          arrow
        }
      }
      blocks {
        _template
        content
        name
        title
        underline
        center
        recipient
        fields {
          label
          inputType
          autocomplete
        }
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      childrenPagesJsonBlockMarkdown {
        childMarkdownRemark {
          html
        }
      }

      rawJson
      fileRelativePath
    }
  }
`
