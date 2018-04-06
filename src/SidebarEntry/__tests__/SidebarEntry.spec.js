import React, { Component } from 'react'
import { render, shallow } from 'enzyme';
import SidebarEntry from '../SidebarEntry';

describe('<SidebarEnty />', ()=>{
    it('renders', ()=>{
        const wrapper = render(<SidebarEntry />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a post title', ()=>{
        const title = "Test Title"
        const wrapper = shallow(<SidebarEntry title={title}/>);
        expect(wrapper.text()).toContain(title);
    })

    it('Title is "Untitled Post" by default', ()=>{
        const wrapper = shallow(<SidebarEntry/>);
        expect(wrapper.text()).toContain("Untitled Post");
    });

    it('renders a summary text', ()=>{
        const summary = "Test Summary..."
        const wrapper = shallow(<SidebarEntry summary={summary}/>);
        expect(wrapper.text()).toContain(summary)
    });

    it('renders "No Summary" by default', ()=>{
        const wrapper = shallow(<SidebarEntry />);
        expect(wrapper.text()).toContain("No Summary");
    });
});