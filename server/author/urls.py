from django.urls import path
from .views import AuthorView


# urlpatterns = [
#     path("", MenuView.as_view()),
#     path('<int:pk>/', MenuDetailView.as_view(), name='menu-detail'),
#     path("categories/", CategoryView.as_view()),

# ]

urlpatterns = [
    path('', AuthorView.as_view()),
    path('<int:pk>/', AuthorView.as_view()),
]
