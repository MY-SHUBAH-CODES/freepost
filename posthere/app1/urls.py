from django.urls import path,include
from app1.views import *
from rest_framework import routers
from .views import *


router = routers.DefaultRouter()
  
# define the router path and viewset to be used
router.register(r'post', Postviewset)
router.register(r'comment', Commentviewset)


  

urlpatterns = [
    path('', include(router.urls)),
]
