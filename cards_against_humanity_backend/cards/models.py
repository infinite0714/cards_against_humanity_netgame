from django.db import models

# Create your models here.
# cards/models.py
from django.db import models

class WhiteCard(models.Model):
    text = models.CharField(max_length=255)

class BlackCard(models.Model):
    text = models.CharField(max_length=255)
    # Other card attributes