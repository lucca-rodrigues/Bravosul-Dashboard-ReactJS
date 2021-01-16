
import React from 'react';
import { shallow } from 'enzyme';

import DetailProducts from './index';

describe('New Page Details Product', () => {
  it('Test render a details product', () => {
    const wrapper = shallow(<DetailProducts />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
