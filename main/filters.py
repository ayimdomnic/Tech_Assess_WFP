from django.db import models
from django_filters import rest_framework as filters

from .models import LifeExpectancy


class DataFilter(filters.FilterSet):
    """ Base Filter to handle Data Filtering"""

    class Meta:
        model = LifeExpectancy
        fields = {
            'region': ['exact'],
            'gho': ['exact'],
            'gender': ['exact'],
            'number_of_years': ['lte', 'gte'],
            'year': ['lte', 'gte']
        }

        filter_overides = {
            models.CharField: {
                'filter_class': filters.CharFilter,
                'extra': lambda f: {
                    'lookup_expr': 'icontains',
                },
            }
        }
