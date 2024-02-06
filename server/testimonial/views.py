from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialListView(generics.ListCreateAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer