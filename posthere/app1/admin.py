from django.contrib import admin
from .models import*

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display=["user","title","desc"]
admin.site.register(Post,PostAdmin)

class CommentAdmin(admin.ModelAdmin):
    list_display=["user","post","comment"]
admin.site.register(Comment,CommentAdmin)


