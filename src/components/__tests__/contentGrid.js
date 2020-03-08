import React from 'react';
import renderer from 'react-test-renderer';

import ContentGrid from '../content/contentGrid';

describe('ContentGrid', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ContentGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
