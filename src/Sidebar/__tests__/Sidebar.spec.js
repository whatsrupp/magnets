import React, { Component } from 'react';
import { configure, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Sidebar from '../Sidebar'

configure({ adapter: new Adapter() });

describe('<Sidebar />', ()=>{

  it('renders', ()=>{
    const wrapper = render(<Sidebar />)
    expect(wrapper).toMatchSnapshot();
  });

})
