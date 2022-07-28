import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rocket from '../Rocket';
import store from '../../redux/configureStore';
import rocketReducer, { fetchRocketsFromApi } from '../../redux/rockets/rockets';

describe('Jest test', () => {
  it('Match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Rocket />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Output should be empty state', () => {
    const state = rocketReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should return content from api', () => {
    const result = fetchRocketsFromApi();
    expect(result).not.toEqual(null);
  });
});
