import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import Layout from "../Layout";

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `Fresh & Local`,
          },
        },
      })
    )
  })

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout children={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})