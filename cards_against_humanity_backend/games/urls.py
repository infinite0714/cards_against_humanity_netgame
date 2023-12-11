from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_game, name='create_game'),
    path('join/<int:game_id>/', views.join_game, name='join_game'),
    path('submit/<int:game_id>/', views.submit_card, name='submit_card'),
]