import React from "react";
import renderer from "react-test-renderer";

import InfoBar from "../infoBar/infoBar";

describe("InfoBar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<InfoBar season="Summer" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})