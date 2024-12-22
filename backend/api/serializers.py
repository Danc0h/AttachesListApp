from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Attache

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class AttacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attache
        fields = ["id", "name", "regNo", "course", "department" "created_at"]

    def create(self, validated_data):
        return Attache.objects.create(**validated_data)


           

