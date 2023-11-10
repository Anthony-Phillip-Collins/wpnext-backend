// Use this query in GraphiQL to get the data you need for the site.

const query = `query GetData {
  pages(where: {orderby: {order: ASC, field: MENU_ORDER}, parentIn: ""}) {
    edges {
      node {
        ...PageFields
        children(where: {orderby: {order: ASC, field: MENU_ORDER}}) {
          edges {
            node {
              ...PageFields
            }
          }
        }
      }
    }
  }
  globals {
    edges {
      node {
        global {
          globalPhone
          globalEmail
          globalSocial {
            globalSocialLink
          }
          globalMetadata {
            globalTitle
            globalDescription
          }
        }
      }
    }
  }
}

fragment PageFields on Page {
  title
  uri
  slug
  menuOrder
  isFrontPage
  parent {
    node {
      slug
    }
  }
  pageSettings {
    navigationLabel
    meta {
      metaTitle
      metaDescription
    }
  }
  servicePage {
    servicePageIcon
  }
  component_Hero {
    heroHeading
    heroImage {
      sourceUrl
      altText
    }
  }
  component_FollowUs {
    followUsHeading
    followUsText
  }
  component_GravityForm {
    gfId
    gfHeading
    gfText
  }
  component_Team {
    teamHeading
    teamText
    team {
      teamName
      teamPosition
      teamDescription
      teamImage {
        sourceUrl
        altText
      }
    }
  }
  component_Testimonials {
    testimonialsHeading
    testimonialsText
    testimonialsQuotes {
      testimonialName
      testimonialQuote
      testimonialImage {
        sourceUrl
        altText
      }
    }
  }
  component_TextBlock {
    textBlockHeading
    textBlockText
    textBlockExcerpt
  }
  # component_Features {
  #   featuresSource {
  #     ...ComponentFields
  #   }
  # }
  component_ServiceCards {
    serviceCardsHeading
    serviceCardsText
    serviceCardsSource {
      ...ComponentFields
    }
  }
}

fragment ComponentFields on Page {
  title
  children(where: {orderby: {order: ASC, field: MENU_ORDER}}) {
    edges {
      node {
        ... on Page {
          title
          slug
          uri
          menuOrder
          servicePage {
            servicePageIcon
          }
          component_Hero {
            heroImage {
              sourceUrl
              altText
            }
          }
          component_TextBlock {
            textBlockHeading
            textBlockText
            textBlockExcerpt
          }
        }
      }
    }
  }
}`;
