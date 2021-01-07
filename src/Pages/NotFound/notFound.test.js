import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './index';


describe('New Page  Not Found', () => {
  it('Test render a component Not Found', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
