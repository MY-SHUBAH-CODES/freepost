from django.db import models
from django.contrib.auth.models import User




class Post(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=500)
    desc=models.CharField(max_length=5000)
    img=models.ImageField(upload_to="POST_MEDIA/")
    
    
class Comment(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    post=models.ForeignKey(Post,on_delete=models.CASCADE)
    comment=models.CharField(max_length=1000)
   
   