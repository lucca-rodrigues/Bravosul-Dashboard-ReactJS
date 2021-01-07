import React from 'react';
import { shallow } from 'enzyme';

import ListProducts from './index';


describe('New Page  List Products', () => {
  it('Test render a component List Products', () => {
    const wrapper = shallow(<ListProducts />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
