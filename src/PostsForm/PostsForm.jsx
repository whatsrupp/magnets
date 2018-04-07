import React, { Component } from 'react'
import './PostsForm.css'

class PostsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            contents: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentsChange = this.handleContentsChange.bind(this);

    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleContentsChange(event) {
        this.setState({contents: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
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

export default PostsForm
