import React, { Component } from 'react'
import { render } from 'enzyme';
import PostsForm from '../PostsForm';

describe('<PostsForm />', ()=>{
    it('renders', ()=>{
        const wrapper = render(<PostsForm />);
        expect(wrapper).toMatchSnapshot();
    })
});