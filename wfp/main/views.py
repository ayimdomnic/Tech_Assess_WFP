from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .filters import DataFilter
from .models import LifeExpectancy
from .serializers import DataSerializer


class DataViewSet(viewsets.ReadOnlyModelViewSet):
    """ A visual endpoint to the data fetched"""
    queryset = LifeExpectancy.objects.filter(
        gender_in=['Male', 'Female'],
        gho_in=[
            'Life expectancy at age 60 (years)',
            'Life expectancy at birth (years)'
        ]
    ).order_by('region')
    serializer_class = DataSerializer
    filter_backends = (filters.DjangoFilterBackend, )
    filterset_class = DataFilter
