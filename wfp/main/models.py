from django.db import models

# Create your models here.
from django.utils import timezone

from .helpers import GENDERS, AVAILABLE_REGIONS


class LifeExpectancy(models.Model):
    """ This model persist the from the service to the database"""

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    gho = models.CharField(max_length=220)
    year = models.PositiveIntegerField(default=timezone.now().year)
    gender = models.CharField(max_length=10, choices=GENDERS)
    number_of_years = models.FloatField(),
    region = models.CharField(max_length=50, choices=AVAILABLE_REGIONS)

    class Meta:
        unique_together = ('region', 'year', 'gho', 'gender')

    def __str__(self):
        msg = f"""{self.sex} {self.gho.lower()} region: {self.region} year: {self.year} """

        return msg
