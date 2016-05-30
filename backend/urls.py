from django.conf.urls import url
from django.contrib import admin

from backend.views import *

urlpatterns = [
    url(r'^1/allposts$', AllPosts.as_view()),
    url(r'^1/getpost/(?P<p_id>[a-zA-Z0-9_.-]+)$', GetPost.as_view()),
    url(r'^1/commentsforpost/(?P<p_id>[a-zA-Z0-9_.-]+)', CommentsForPost.as_view()),
    url(r'^1/newcomment/(?P<p_id>[a-zA-Z0-9_.-]+)', NewComment.as_view()),
]