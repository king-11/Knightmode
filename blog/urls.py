from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.welcome, name='welcome'),
    path('calendar/', views.calendar, name='Calendar'),
    path('identity/', views.identity, name='identity'),
    path('curriculum/', views.curriculum, name='curriculum'),
    path('attendance/', views.attendance, name='attendance'),
    path('notes/', views.notes, name='notes'),
]
