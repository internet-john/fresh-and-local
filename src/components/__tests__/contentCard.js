import React from "react";
import renderer from "react-test-renderer";

import ContentCard from "../content/contentCard";

describe("ContentCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ContentCard />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

  it("Displays header and content fields for season card", () => {
    const tree = renderer
      .create(<ContentCard context={'HOME_PG'} data={{ header: 'Winter', content: 'December 21 - March 19 2020' }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

  it("Displays node name, type for produce card", () => {
    const tree = renderer
      .create(<ContentCard context={'SEASON_PG'} data={{ name: 'Broccoli', type: 'Vegetable' }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });
})