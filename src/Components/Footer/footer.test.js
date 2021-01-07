import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';


describe('New Custom component  Footer', () => {
  it('Test render a component footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
