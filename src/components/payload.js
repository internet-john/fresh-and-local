import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Payload = () => {
  const data = useStaticQuery(graphql`
  query allProduce {

  allFruit {
    edges {
      node {
        id
        name
        type
        month
        location
      }
    }
  }
  allVegetable {
    edges {
      node {
        id
        name
        type
        month
        location
      }
    }
  }
}
  `);

  const allFruit = data && data.allFruit && data.allFruit.edges && data.allFruit.edges[0] ? data.allFruit.edges : []
  const allVegetables = data && data.allVegetable && data.allVegetable.edges && data.allVegetable.edges[0] ? data.allVegetable.edges : []

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
      <div>{allFruit.map(node => node.node.name)}</div>
      <div>{allVegetables.map(node => node.node.name)}</div>
        <footer>
          © {new Date().getFullYear()}, John Holman, Xavi Labs LLC
        </footer>
      </div>
    </>
  )
}

export default Payload;
