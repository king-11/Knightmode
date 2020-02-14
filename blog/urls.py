from django.urls import path
from . import views

app_name='blog'

urlpatterns = [
    path('welcome/', views.welcome, name='welcome'),
    path('calendar/', views.calendar, name='Calendar'),
    path('identity/', views.identity, name='identity'),
]