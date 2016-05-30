from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

# Create your models here.
class BlogPost(models.Model):
    author = models.CharField(max_length=100, default="")
    posted_at = models.DateTimeField(default=timezone.now)
    body = models.TextField(default="")
    title = models.CharField(max_length=500, default="")

    def __str__(self):
        return self.author + ": " + self.title

class Comment(models.Model):
    name = models.CharField(max_length=100, default="")
    text = models.TextField(default="")
    post = models.ForeignKey(BlogPost, related_name="comments", null=True, blank=True)
    posted_at = models.DateTimeField(default=timezone.now)