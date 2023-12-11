from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
     # Extend Django's AbstractUser or add custom fields if needed
    public_id = models.UUIDField(db_index=True, unique=True, default=uuid.uuid4)
    email = models.EmailField(unique=True)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    def __str__(self):
        return self.username