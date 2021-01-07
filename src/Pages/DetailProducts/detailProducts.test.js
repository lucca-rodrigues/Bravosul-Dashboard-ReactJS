import React from 'react';
import { shallow } from 'enzyme';

import DetailProducts from './index';


describe('New page  Detail Products', () => {
  it('Test render a component Detail Products', () => {
    const wrapper = shallow(<DetailProducts />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
