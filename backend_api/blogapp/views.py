from django.shortcuts import render
from .models import Blog
from .serializers import BlogSerializer, BlogListSerializer, UserRegisterationSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['POST'])
def registerUser(request):
    serializer = UserRegisterationSerializer(
        data = request.data
    )
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createBlog(request):
    user = request.user
    serializer = BlogSerializer(
        data = request.data
    )
    
    if serializer.is_valid():
        serializer.save(
            author = user
        )
        return Response(serializer.data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def listBlogs(request):
    blogs = Blog.objects.all()
    serializer = BlogListSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateBlog(request, pk):
    user = request.user
    blog = Blog.objects.get(id=pk)
    if blog.author != user:
        return Response(
            {"error": "You do not have permission to update this blog."}, status=status.HTTP_403_FORBIDDEN
            )
    
    serializer = BlogSerializer(
        blog,
        data = request.data
    )
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)