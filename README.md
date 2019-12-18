[![HitCount](http://hits.dwyl.io/ayimdomnic/Tech_Assess_WFP.svg)](http://hits.dwyl.io/ayimdomnic/Tech_Assess_WFP)

# WFP Assessment Task 

This repository contains the code for the [API]() and the [Web](). 

## Getting Started

### Prerequisites

Kindly ensure you have the following installed on your machine:

- [ ] [Python 3](https://realpython.com/installing-python/)
- [ ] [Pipenv](https://pipenv.readthedocs.io/en/latest/#install-pipenv-today)
- [ ] [Git]()
- [ ] [Node]()
- [ ] [create-react-app ]()
- [ ] [sqlite]()
- [ ] An IDE or Editor of your choice

### Running the Application

1. Clone the repository
```
$ git clone https://github.com/ayimdomnic/Tech_Assess_WFP.git
```

2. Check into the cloned repository
```
$ cd Tech_Assess_WFP
```

3. If you are using Pipenv, setup the virtual environment and start it as follows:
```
$ pipenv install && pipenv shell
```

4. Install the requirements
```
$ pip install -r requirements.txt
```

4. Configure Redis configuration in `wfp/wfp/settings.py`

5. Start the Django API
```
$ python manage.py runserver
```

6. Send requests to `http://localhost:8000/data/`

## Contribution

Please feel free to raise issues using this [template](./.github/ISSUE_TEMPLATE.md) and I'll get back to you.

You can also fork the repository, make changes and submit a Pull Request using this [template](./.github/PULL_REQUEST_TEMPLATE.md).
