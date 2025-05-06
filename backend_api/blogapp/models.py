from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
    bio = models.TextField(null=True, blank=True)
    profile_image = models.ImageField(upload_to='profile_img', null=True, blank=True)
    facebook = models.URLField(max_length=255, blank=True, null=True)
    twitter = models.URLField(max_length=255, blank=True, null=True)
    instagram = models.URLField(max_length=255, blank=True, null=True)
    youtube = models.URLField(max_length=255, blank=True, null=True)
    github = models.URLField(max_length=255, blank=True, null=True)
    
    def __str__(self):
        return self.username