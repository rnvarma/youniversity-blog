from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponseRedirect
from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from backend.models import *

class Serializer(object):
    @staticmethod
    def serialize_post(post):
        data = {}
        data["author"] = post.author
        data["body"] = post.body
        data["title"] = post.title
        data["posted_at"] = post.posted_at
        data["id"] = post.id
        return data

    @staticmethod
    def serialize_comment(comment):
        data = {}
        data["name"] = comment.name
        data["text"] = comment.text
        data["id"] = comment.id
        data["posted_at"] = comment.posted_at
        return data

class AllPosts(APIView):
    def get(self, request):
        posts = BlogPost.objects.all().order_by('-posted_at')
        posts = map(Serializer.serialize_post, posts)
        return Response(posts)

class GetPost(APIView):
    def get(self, request, p_id):
        post = BlogPost.objects.get(id=p_id)
        return Response(Serializer.serialize_post(post))

class CommentsForPost(APIView):
    def get(self, request, p_id):
        post = BlogPost.objects.get(id=p_id)
        comments = post.comments.all().order_by('-posted_at')
        comments = map(Serializer.serialize_comment, comments)
        return Response(comments)

class NewComment(View):
    def post(self, request, p_id):
        name = request.POST.get('name')
        text = request.POST.get('text')
        post = BlogPost.objects.get(id=p_id)
        comment = Comment(name=name, text=text, post=post)
        comment.save()
        comments = post.comments.all().order_by('-posted_at')
        comments = map(Serializer.serialize_comment, comments)
        return JsonResponse(comments, safe=False)



