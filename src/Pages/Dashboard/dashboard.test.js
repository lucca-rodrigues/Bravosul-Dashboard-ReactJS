import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './index';


describe('New page  Dashboard', () => {
  it('Test render a component Dashboard', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
