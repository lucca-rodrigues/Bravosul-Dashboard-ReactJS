import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from './index';


describe('New Custom component  NavigationBar', () => {
  it('Test render a component navigation', () => {
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
