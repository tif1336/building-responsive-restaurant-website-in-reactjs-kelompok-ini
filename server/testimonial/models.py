from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    rating = models.IntegerField(default=0)

    def __str__(self):
        return self.name
