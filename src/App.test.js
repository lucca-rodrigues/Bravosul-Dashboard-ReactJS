import React from 'react';
import { shallow } from 'enzyme';

import App from './App.js';

describe('Teste my App', () => {
  it('Test render my App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

});
