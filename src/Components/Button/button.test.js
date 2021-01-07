import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Button from './index';


describe('New Custom component  Button', () => {
  it('Test render a component button', () => {
    const {getByTestId} = render(<Button />);
    fireEvent.click(getByTestId('component-button'))  });
  },

  // it('Test render a component button', () => {
  //   const {getByTestId} = render(<Button>Entrar</Button>);
  //   fireEvent.click(getByTestId('component-button'));
  // },

  // it('Test type button', () => {
  //   const {getByTestId} = render(<Button type="submit">Entrar</Button>);
  //   fireEvent.click(getByTestId('component-button'));
  // },

  // it('Test click button', () => {
  //   const {getByTestId} = render(<Button type="submit" onClick={() => alert('Click ok!')}>Entrar</Button>);
  //   fireEvent.click(getByTestId('component-button'));
  // }

});
