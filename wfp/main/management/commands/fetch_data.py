from django.core.management import BaseCommand
from wfp.main.helpers import DEFAULT
from wfp.main.models import LifeExpectancy


def fetch_data():

    facts = DEFAULT['fact']
    for fact in facts:
        data = dict()
        data.update({
            'gho': fact['dim']['GHO'],
            'region': fact['dim']['REGION'],
            'year': fact['dim']['YEAR'],
            'gender': fact['dim']['SEX'],
            'number_of_years': fact['Value']
        })
        LifeExpectancy.objects.update_or_create(data)


 class Command(BaseCommand):
    info = "Fetch from file"

    def handle(self, *args, **options):
        try:
            fetch_data()
            self.stdout.write(self.style.SUCCESS('Data Loaded Successfully!'))
        except Exception:
            self.stdout.write(self.style.ERROR('Error encountered while loading data'))
