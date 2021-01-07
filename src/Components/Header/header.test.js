import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';


describe('New Custom component  Header', () => {
  it('Test render a component header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
