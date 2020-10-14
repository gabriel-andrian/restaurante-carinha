import React from 'react';
import AtKitchenCard from '../index';
import renderer from 'react-test-renderer';

describe('at-kitchen-card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AtKitchenCard amount={3} itemId={4} note={'item de teste'} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
