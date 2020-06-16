import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SleepTrackerImg = () => {
  const data = useStaticQuery(graphql`
    query {
      sleepTrackerImage: file(relativePath: { eq: "sleeptracker.png" }) {
        childImageSharp {
          fixed(width: 250, height: 220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.sleepTrackerImage.childImageSharp.fixed} />
}

export default SleepTrackerImg
