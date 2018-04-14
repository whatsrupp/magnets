import React, { Component } from 'react'
import './PostsForm.css'
import {graphql} from 'react-apollo';
import {createPostMutation, createPostOptions } from './postFormGQL'

class PostsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentsChange = this.handleContentsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleContentsChange(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.mutate({
            variables: {
                title: this.state.title,
                content: this.state.content,
            }
        })
    }

    render(){
        return(
            <form className="PostsForm"onSubmit={this.handleSubmit}>
                <div className="PostsForm__title-group" >
                    <label className="PostsForm__label">
                        Title
                    </label>
                    <input className="PostsForm__field"type="text" value={this.state.title} onChange={this.handleTitleChange} />
                </div>
                <div className="PostsForm__contents-group" >
                    <label className="PostsForm__label">
                        
                    </label>
                    <textarea className="PostsForm__field PostsForm__field--text-area"type="text-field" value={this.state.contents} onChange={this.handleContentsChange} />
                </div>
                <div className="PostsForm__controls">
                <input className="PostsForm__submit-button"type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}

export default graphql(
    createPostMutation,createPostOptions
)(PostsForm)