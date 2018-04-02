import React, { Component } from 'react';
import { render} from 'enzyme';
import Sidebar from '../Sidebar'

describe('<Sidebar />', ()=>{

  it('renders', ()=>{
    const wrapper = render(<Sidebar />)
    expect(wrapper).toMatchSnapshot();
  });

})
