import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';


describe('New Custom component  Button', () => {
  it('Test render a component button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Test label button', () => {
    const wrapper = shallow(<Button>Entrar</Button>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Test type button', () => {
    const wrapper = shallow(<Button type="submit">Entrar</Button>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Test click button', () => {
    const wrapper = shallow(
      <Button type="submit" onClick={() => alert('Click ok!')}>Entrar</Button>
    );
    expect(wrapper.exists()).toBeTruthy();
  });

});
