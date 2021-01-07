import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Footer from './index';


describe('New Custom component  Footer', () => {
  it('Test render a component Footer', () => {
    const {getByTestId} = render(<Footer />);
    fireEvent.click(getByTestId('component-footer'))  });
  }
});
