//sanity client side

import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  apiVersion: "2023-01-28",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
})

export const readClient = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  apiVersion: "2023-01-28",
  useCdn: false,
  ignoreBrowserTokenWarning: true,

  //token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = imageUrlBuilder(readClient)

export const urlFor = (source) => builder.image(source)
