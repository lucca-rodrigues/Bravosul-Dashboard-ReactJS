import React from 'react';
import { shallow } from 'enzyme';

import NewProducts from './index';


describe('New Page  New Products', () => {
  it('Test render a component New Products', () => {
    const wrapper = shallow(<NewProducts />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
