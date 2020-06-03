from django.urls import path
from .views import * # . means current folder and * means all

urlpatterns = [
    path('', TaskView.as_view(), name='tasks_list_url')
]