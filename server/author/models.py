from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=64)
    image = models.ImageField(upload_to='images/')
    description = models.TextField()

    def __str__(self) -> str:
        return f'{self.name}'

    class Meta:
        verbose_name_plural = 'Author'

