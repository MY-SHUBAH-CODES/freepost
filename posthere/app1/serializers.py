from rest_framework import serializers
from .models import *

class Postserializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        fields='__all__'
    def validate(self,attrs):
        title=attrs.get('title')
        desc=attrs.get('desc')
        if len(desc)<=10:
            raise serializers.ValidationError("desc is to short")
        if len(title)<=5:
            raise serializers.ValidationError("title is to short")
        
        if len(title)>=len(desc):
            raise serializers.ValidationError("title can't be longer than desc")
        
        
        return attrs

    

class Commentserializer(serializers.ModelSerializer):
    class Meta:
        model= Comment
        fields='__all__'

