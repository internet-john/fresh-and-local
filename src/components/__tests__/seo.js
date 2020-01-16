// import React from "react"
// import renderer from "react-test-renderer"

// import SEO from "../seo"

// beforeEach(() => {
//     StaticQuery.mockImplementationOnce(({ render }) =>
//       render({
//         site: {
//           siteMetadata: {
//             "title": "Fresh & Local",
//             "description": "Find out what's fresh and local",
//             "author": "@john-src"
//           }
//         }
//       })
//     )
//   })
// describe("SEO", () => {
//   it("renders correctly", () => {
//     const tree = renderer.create(<SEO />).toJSON();
//     expect(tree).toMatchSnapshot()
//   })
// })