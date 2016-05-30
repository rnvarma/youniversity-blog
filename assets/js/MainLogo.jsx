require('css/MainLogo')

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="main-logo-container">
                <div className="main-text">
                    <span className="you">You</span>niversity
                </div>
                <div className="blog-text">
                    Blog
                </div>
            </div>
        )
    }
})