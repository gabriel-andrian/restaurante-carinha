import React from 'react';
import AtKitchenCard from '../index';
import renderer from 'react-test-renderer';

describe('at-kitchen-card', () => {
  it('renders correctly with note', () => {
    const tree = renderer
      .create(<AtKitchenCard amount={3} name={'nome de teste'} note={'item de teste'} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without note', () => {
    const tree = renderer.create(<AtKitchenCard amount={3} name={'nome de teste'} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
