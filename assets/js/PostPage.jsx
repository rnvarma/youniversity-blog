require('bootstrap-loader');
require("css/style.scss")

var React = require('react')
var ReactDOM = require('react-dom')
var PostContainer = require('js/PostContainer')
var MainLogo = require('js/MainLogo')

var PostPage = React.createClass({
    getInitialState: function() {
        return {post: {}}
    },
    componentDidMount: function() {
        $.ajax({
          url: this.props.url + $("#post-id").attr("data-id"),
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({post: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },
    render: function() {
        return (
            <div>
                <div className="main-body-container">
                    <MainLogo />
                    <PostContainer data={this.state.post}/>
                </div>
            </div>
        );
    }
})

ReactDOM.render(<PostPage url="/1/getpost/"/>, $('#react-app').get(0))
