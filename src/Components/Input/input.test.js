import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

test('renders correctly', () => {
  const tree = renderer.create(<Input />);
  expect(tree).toMatchSnapshot();
});






// import React from 'react';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';



// import { shallow, mount, render } from 'enzyme';

// import Input from './index';

// configure({ adapter: new Adapter() });



// describe('New Custom component  Input', () => {
//   it('Test render a component input', () => {
//     const wrapper = shallow(<Input />);
//     expect(wrapper.exists()).toBeTruthy();
//   });

// });

//import React from 'react';
// import { shallow } from 'enzyme';

// import Input from './index';


// describe('New Custom component  Input', () => {
//   it('Test render a component input', () => {
//     const wrapper = shallow(<Input />);
//     expect(wrapper.exists()).toBeTruthy();
//   });

// });
