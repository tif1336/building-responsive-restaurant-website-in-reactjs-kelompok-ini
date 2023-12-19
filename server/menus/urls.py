from django.urls import path
from .views import MenuView, CategoryView


urlpatterns = [
    path("", MenuView.as_view()),
    path('<int:pk>/', MenuDetailView.as_view(), name='menu-detail'),
    path("categories/", CategoryView.as_view()),

]
