from django.urls import path
from . import views

urlpatterns = [
    path("attaches/", views.AttacheListCreate.as_view(), name="attache-list"),
    path("attaches/delete/<int:pk>/", views.AttacheDelete.as_view(), name="delete-attache"),
]