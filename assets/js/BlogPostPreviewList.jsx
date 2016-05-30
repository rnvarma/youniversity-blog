require('css/BlogPostPreviewList')

var React = require('react')
var BlogPostPreview = require('js/BlogPostPreview')

module.exports = React.createClass({
    render: function() {
        var previews = this.props.data.map(function(post) {
            return (
                <BlogPostPreview key={post.id} data={post}/>
            )
        })
        return (
            <div className="blog-post-preview-list">
                {previews}
            </div>
        )
    }
})