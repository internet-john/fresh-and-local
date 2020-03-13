import React from 'react';
import renderer from 'react-test-renderer';

import ContentCard from '../content/contentCard';

describe('ContentCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ContentCard
          context={'HOME_PG'}
          image={``}
          data={{ header: 'Winter', content: 'December 21 - March 19 2020' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays header and content fields for season card', () => {
    const tree = renderer
      .create(
        <ContentCard
          context={'HOME_PG'}
          image={``}
          data={{ header: 'Winter', content: 'December 21 - March 19 2020' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays node name, type, general and nutritional info for produce card', () => {
    const mockProduceNode = {
      node: {
        name: 'Broccoli',
        type: 'Vegetable',
        generalInfo:
          'Eat it raw or cooked, and in dishes such as soups, stews, salads, or on its own.',
        nutritionInfo:
          'The nutrients in asparagus can support heart and bone health, while the folate and iron that it contains may be especially beneficial during pregnancy.',
      },
    };
    const tree = renderer
      .create(
        <ContentCard context={'SEASON_PG'} image={``} data={mockProduceNode} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
