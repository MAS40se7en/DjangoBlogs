from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registerUser, name='register'),
    path('update_user/', views.updateUser, name='update_user'),
    path('create_blog/', views.createBlog, name='create_blog'),
    path('list_blogs/', views.listBlogs, name='list_blogs'),
    path('update_blog/<int:pk>/', views.updateBlog, name='update_blog'),
    path('delete_blog/<int:pk>/', views.deleteBlog, name='delete_blog'),
]