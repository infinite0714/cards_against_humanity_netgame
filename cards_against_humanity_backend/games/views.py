from django.shortcuts import render

# Create your views here.
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Game, Player

def create_game(request):
    # Logic to create a new game
    pass

def join_game(request, game_id):
    # Logic to add a player to a game
    pass

def submit_card(request, game_id):
    # Logic to handle card submissions by players in a game
    pass

