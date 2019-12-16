import json

from django.conf import settings

AVAILABLE_REGIONS = [
    ('Global', 'Global'),
    ('Africa', 'Africa'),
    ('Americas', 'Americas'),
    ('South-East Asia', 'South-East Asia'),
    ('Europe', 'Europe'),
    ('Eastern Mediterranean', 'Eastern Mediterranean'),
    ('Western Pacific', 'Western Pacific')
]

GENDERS = [
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Both sexes', 'Both sexes')
]

file = open(settings.DATA_FILE, 'r')

DEFAULT = json.loads(file.read())