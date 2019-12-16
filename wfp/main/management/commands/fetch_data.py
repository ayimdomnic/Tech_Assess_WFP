from django.core.management import BaseCommand
from main.helpers import DEFAULT_DATA
from main.models import LifeExpectancy
import logging


def fetch_data():
    content = DEFAULT_DATA["fact"]

    for item in content:
        data = dict()
        data.update({
            'gho': item['dim']['GHO'],
            'region': item['dim']['REGION'],
            'year': item['dim']['YEAR'],
            'gender': item['dim']['SEX'],
            'number_of_years': item['Value']
        })
        LifeExpectancy.objects.update_or_create(
            **data
        )


class Command(BaseCommand):
    info = "Fetch from file"

    def handle(self, *args, **options):
        try:
            fetch_data()
            self.stdout.write(self.style.SUCCESS('Data Loaded Successfully!'))
        except Exception:
            self.stdout.write(self.style.ERROR('Error encountered while loading data'))
            raise Exception
