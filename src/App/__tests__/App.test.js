import React, { Component } from 'react';
import { render, shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App'


describe('<App />', ()=>{

  it('renders', ()=>{
    const wrapper = render(<App />)
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Sidebar component', ()=>{
      const wrapper = shallow(<App />)
      const sidebar = wrapper.find('Sidebar')
      expect(sidebar.length).toEqual(1)
  })

})
