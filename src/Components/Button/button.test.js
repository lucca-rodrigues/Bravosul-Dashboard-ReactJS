import React from 'react';
import { shallow} from 'enzyme';

import Button from './index';

describe('New Custom component  Button', () => {
  it('Test render a component button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBeTruthy();
  });

});

