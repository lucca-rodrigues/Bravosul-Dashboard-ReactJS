import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './index';


describe('New Page  SignIn', () => {
  it('Test render a component SignIn', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
