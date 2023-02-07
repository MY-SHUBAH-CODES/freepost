from django.shortcuts import render,HttpResponse,redirect
from.models import *
from .serializers import *
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.permissions import *
from django.contrib.auth import authenticate


# Create your views here.

  
class Postviewset(viewsets.ModelViewSet):
  queryset = Post.objects.all()
  serializer_class = Postserializer
  http_method_names = ['get','put','post','delete']
  
        
    

        



class Commentviewset(viewsets.ModelViewSet):
  queryset = Comment.objects.all()
  serializer_class = Commentserializer




