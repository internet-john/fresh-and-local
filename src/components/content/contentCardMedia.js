import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ContentCardMedia = props => {
  //   const imgRelPath = `${props.product}.png`;
  //   const data = graphql`
  //     query ProduceImage($imgRelPath: String) {
  //       file(relativePath: { eq: $imgRelPath }) {
  //         id
  //         relativePath
  //         childImageSharp {
  //           fluid {
  //             aspectRatio
  //             base64
  //             sizes
  //             src
  //             srcSet
  //           }
  //         }
  //       }
  //     }
  //   `;
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "asparagus.png" }) {
        id
        relativePath
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return data.file ? (
    <Img fluid={data.file.childImageSharp.fluid} alt={data.file.relativePath} />
  ) : (
    <></>
  );
};

export default ContentCardMedia;
