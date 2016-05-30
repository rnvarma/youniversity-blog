require('css/Post')

var React = require('react')
var marked = require('marked')

module.exports = React.createClass({
    render: function() {
        var text = this.props.data.body;
        if (text != undefined) text = marked(text)
        return (
            <div className="post">
                <div className="title">
                    {this.props.data.title}
                </div>
                <div className="author">
                    by <span className="name">{this.props.data.author}</span>
                </div>
                <div className="body">
                    <span dangerouslySetInnerHTML={{__html:text}} />
                </div>
            </div>
        )
    }
})