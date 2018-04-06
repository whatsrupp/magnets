import React, { Component } from 'react';
import './SidebarEntry.css'
import PropTypes from 'prop-types'

class SidebarEntry extends Component {

    render(){
        return(
            <div className="SidebarEntry">
                <h1 className="SidebarEntry__title">{this.props.title} </h1>
                <p className="SidebarEntry__summary">{this.props.summary}...</p>
            </div>
        )
    }
}

SidebarEntry.defaultProps = {
    title: 'Untitled Post',
    summary: 'No Summary'
}

SidebarEntry.prototypes = {
    title: PropTypes.string,
    summary: PropTypes.string
}
export default SidebarEntry