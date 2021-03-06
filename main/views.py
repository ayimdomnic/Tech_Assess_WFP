from django.shortcuts import render
from django_filters import rest_framework as filters

# Create your views here.
from rest_framework import viewsets

from .filters import DataFilter
from .models import LifeExpectancy
from .serializers import DataSerializer


class DataViewSet(viewsets.ReadOnlyModelViewSet):
    """ A visual endpoint to the data fetched"""
    queryset = LifeExpectancy.objects.filter(
        gender__in=['Male', 'Female'],
        gho__in=[
            'Life expectancy at age 60 (years)',
            'Life expectancy at birth (years)'
        ]
    ).order_by('region')
    serializer_class = DataSerializer
    filter_backends = (filters.DjangoFilterBackend, )
    filterset_class = DataFilter
