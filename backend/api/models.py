from django.db import models
from django.contrib.auth.models import User


class Attache(models.Model):
    name = models.CharField(max_length=100)
    regNo = models.CharField(max_length=100)
    course = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
