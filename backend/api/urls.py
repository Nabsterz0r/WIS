from django.urls import path, include
from rest_framework import routers

from api import views


router = routers.DefaultRouter()
router.register(r'users_list', views.UsersList, base_name='users')
router.register(r'images_list', views.ImagesList, base_name='images')
# router.register(r'vote', views.VoteView.as_view(), base_name='vote')
# router.register(r'detail/(?P<id>[0-9]/$)', views.DetailView, base_name='detail')

app_name = 'api'

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/vote/<int:id>', views.VoteView.as_view()),
    path('api/export/', views.export_xlsx)
]
