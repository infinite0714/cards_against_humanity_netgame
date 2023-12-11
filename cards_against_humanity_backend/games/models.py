from django.db import models

# Create your models here.
# games/models.py
from django.db import models
from users.models import User

class Game(models.Model):
    name = models.CharField(max_length=100)
    # Other game attributes

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    # Other player attributes