require('css/Navbar')

var React = require('react')

module.exports = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <span className="you">You</span><span className="niversity">niversity blog</span>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
})