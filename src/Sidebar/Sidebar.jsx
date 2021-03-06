import React, { Component } from 'react'
import logo from './magnet.svg'
import './Sidebar.css';
import SidebarEntry from 'SidebarEntry/SidebarEntry';
import {graphql} from 'react-apollo';
import getPostsQuery from './SidebarGQL'

class Sidebar extends Component {

  constructor(props){
    super(props);
    this.state = {
      logoAnimationCssClass: 'Sidebar__Logo--animated'
    }
    this.handleLogoClick = this.handleLogoClick.bind(this)
  }

  handleLogoClick(){
   
    this.setState({ logoAnimationCssClass: '' }, () => {
      setTimeout(() => this.setState({logoAnimationCssClass: 'Sidebar__Logo--animated'}), 0)
    })
  }

  renderPosts(){
    const { posts, loading } = this.props.data;
    if(!loading ){
      return posts.map((post)=>{
        return (
          <SidebarEntry 
            title={post.title}
            content={post.content}
            key={post._id}
          />
        )
      })
    }

  }

  render(){

    return(
      <div className="Sidebar" >
        <div className="Sidebar__header">
          <img 
            src={logo} 
            className={`Sidebar__Logo ${this.state.logoAnimationCssClass}`} 
            alt="logo" 
            onClick={this.handleLogoClick}
          />
          <h1 className="Sidebar__title">Magnets</h1>
        </div>
        <div className="Sidebar__posts">
          <h2 className="Sidebar__subtitle">Posts</h2>
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}


export default graphql(getPostsQuery)(Sidebar);
