require('css/CommentForm')

var React = require('react')

module.exports = React.createClass({
    getInitialState: function() {
        return {name: '', text: ''}
    },
    handleNameChange: function(e) {
        this.setState({name: e.target.value})
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value})
    },
    handleSubmit: function(e) {
        e.preventDefault();
        if (!(this.state.name && this.state.text)) return;
        var commentData = {
            name: this.state.name,
            text: this.state.text
        }
        this.props.onCommentSubmit(commentData);
        this.setState({name: '', text: ''})
    },
    render: function() {
        return (
            <form className="new-comment-form" onSubmit={this.handleSubmit}>
                <fieldset className="form-group">
                    <input
                        className="form-control name-input"
                        type="text"
                        placeholder="What is your name?"
                        value={this.state.name}
                        onChange={this.handleNameChange}/>
                    <textarea
                        className="form-control"
                        type="text"
                        placeholder="Enter your comment"
                        value={this.state.text}
                        onChange={this.handleTextChange}/>
                </fieldset>
                <button type="submit" className="btn">Submit Comment</button>
            </form>
        )
    }
})