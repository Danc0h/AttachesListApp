from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer,AttacheSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Attache


class AttacheListCreate(generics.ListCreateAPIView):
    serializer_class = AttacheSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Attache.objects.all()

    def perform_create(self, serializer):
        serializer.save()
    


class AttacheDelete(generics.DestroyAPIView):
    serializer_class = AttacheSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Attache.objects.all()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
