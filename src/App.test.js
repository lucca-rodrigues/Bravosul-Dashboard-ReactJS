import React from 'react';
import ReactDOM from 'react-dom'
import App from './index';

describe('Test my App', () => {
    it('render my Appo', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


});
