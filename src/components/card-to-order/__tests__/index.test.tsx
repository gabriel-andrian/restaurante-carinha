import React from 'react';
import CardToOrder from '../index';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(() => ({ url: '/url' })),
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

describe('card-to-order', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <CardToOrder
          title={'Título de Teste'}
          description={'Descrição de teste'}
          img={'#'}
          price={0}
          id={1}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
