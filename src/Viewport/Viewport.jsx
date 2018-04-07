import React, { Component } from 'react';
import './Viewport.css'
const Viewport = ({children}) =>{
    return(
        <div className="Viewport">
            {children}
        </div>
    )
}

export default Viewport