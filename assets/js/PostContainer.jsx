require('css/BlogPostPreviewList')

var React = require('react')
var Post = require('js/Post')
var CommentList = require('js/CommentList')

module.exports = React.createClass({
    render: function() {
        return (
            <div className="blog-post-preview-list">
                <Post data={this.props.data}/>
                <CommentList/>
            </div>
        )
    }
})