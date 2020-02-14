from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm

def welcome(request):
    return render(request, 'Welcome.html', {})

def calendar(request):
    return render(request, 'Calendar.html', {})

def identity(request):
    return render(request, 'identity.html', {})