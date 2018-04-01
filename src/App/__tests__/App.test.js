import React, { Component } from 'react';
import { configure, render, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../App'

configure({ adapter: new Adapter() });

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
