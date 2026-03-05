from rest_framework import routers
from octofit_tracker import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'teams', views.TeamViewSet)
router.register(r'activities', views.ActivityViewSet)
router.register(r'leaderboard', views.LeaderboardViewSet)
router.register(r'workouts', views.WorkoutViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
