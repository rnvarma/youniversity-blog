require('bootstrap-loader');
require("css/style.scss")

var React = require('react')
var ReactDOM = require('react-dom')
var Navbar = require('js/Navbar')
var BlogPostPreviewList = require('js/BlogPostPreviewList')
var MainLogo = require('js/MainLogo')

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = $.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

csrftoken = getCookie('csrftoken');

var YouBlog = React.createClass({
    getInitialState: function() {
        return {posts: []}
    },
    componentDidMount: function() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({posts: data});
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
                    <BlogPostPreviewList data={this.state.posts}/>
                </div>
            </div>
        );
    }
})

ReactDOM.render(<YouBlog url="1/allposts"/>, $('#react-app').get(0))




