import React, { Component } from 'react'
import { render } from 'enzyme';
import Viewport from '../Viewport';

describe('<Viewport />', ()=>{
    it('renders', ()=>{
        const wrapper = render(<Viewport />);
        expect(wrapper).toMatchSnapshot();
    })
});