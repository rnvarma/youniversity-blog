
require('css/BlogPostPreview')

var React = require('react')
var Moment = require('moment')
var marked = require('marked')

module.exports = React.createClass({
    openBlogPost: function() {
        window.location.href = "/post/" + this.props.data.id;
    },
    render: function() {
        var blogPostUrl = "/post/" + this.props.data.id;
        var date = Moment(this.props.data.posted_at, "YYYY-MM-DDTHH:mm:ssZ")
        var text = this.props.data.body.slice(0, 200) + "..."
        return (
            <div className="blog-post-preview">
                <a className="title" href={blogPostUrl}>
                    {this.props.data.title}
                </a>
                <div className="body">
                    {text}
                </div>
                <div className="metadata">
                    <div className="time">
                        Posted {date.fromNow()}
                    </div>
                    <div className="author">
                        {this.props.data.author}
                    </div>
                </div>
            </div>
        )
    }
})