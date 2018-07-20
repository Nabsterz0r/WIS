from django.db import models
from datetime import date


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    birth = models.DateField()
    age = models.IntegerField(blank=True, null=True)

    def get_age(self):
        self.age = int(date.today().year - self.birth.year)

    def __str__(self):
        return self.name


class Images(models.Model):
    user = models.ForeignKey(User, related_name='images', on_delete=models.CASCADE)
    photo = models.ImageField()
    like = models.IntegerField(default=0)

    def __str__(self):
        return self.user.name