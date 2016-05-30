require('css/CommentList')

var React = require('react')
var Moment = require('moment')
var CommentForm = require('js/CommentForm')

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

module.exports = React.createClass({
    getInitialState: function() {
        return {comments: []}
    },
    onCommentSubmit: function(newComment) {
        $.ajax({
          url: '/1/newcomment/' + $("#post-id").attr("data-id"),
          dataType: 'json',
          type: 'POST',
          data: newComment,
          beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
          },
          success: function(data) {
            this.setState({comments: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },
    componentDidMount: function() {
        $.ajax({
          url: "/1/commentsforpost/" + $("#post-id").attr("data-id"),
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({comments: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },
    render: function() {
        var comments = this.state.comments.map(function(comment) {
            var date = Moment(comment.posted_at, "YYYY-MM-DDTHH:mm:ssZ")
            return (
                <div className="comment" key={comment.id}>
                    <div className="text">
                        {comment.text}
                    </div>
                    <div className="metadata">
                        <div className="time">
                            Posted {date.fromNow()}
                        </div>
                        <div className="name-area">
                            by <span className="name">{comment.name}</span>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="comments-container">
                <h3>Comments</h3>
                <CommentForm onCommentSubmit={this.onCommentSubmit}/>
                {comments}
            </div>
        )
    }
})