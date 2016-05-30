from django.conf.urls import url
from django.contrib import admin

from home.views import *

urlpatterns = [
    url(r'^$', HomePage.as_view()),
    url(r'^post/(?P<p_id>[a-zA-Z0-9_.-]+)', BlogPost.as_view())
]