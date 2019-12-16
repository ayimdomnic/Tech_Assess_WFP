from rest_framework import serializers

from .models import LifeExpectancy


class DataSerializer(serializers.ModelSerializer):
    """Serializer for Data fetched from the WHO service"""

    class Meta:
        model = LifeExpectancy
        fields = ('gho', 'region', 'year', 'gender', 'number_of_years')
