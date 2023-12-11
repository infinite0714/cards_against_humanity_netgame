from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json

@csrf_exempt
def sign_up(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return JsonResponse({'error': 'Please provide all required fields.'}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists.'}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists.'}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        login(request, user)
        return JsonResponse({'success': 'User created successfully.'})

    return JsonResponse({'error': 'Invalid request method.'}, status=405)

@csrf_exempt
def sign_in(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'error': 'Please provide both username and password.'}, status=400)

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'success': 'User authenticated successfully.'})

        return JsonResponse({'error': 'Invalid credentials.'}, status=401)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)