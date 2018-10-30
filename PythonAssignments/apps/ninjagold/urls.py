from django.conf.urls import url, include
import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process_gold/(?P<location>\w+)$', views.gold),
]
# \w+ - any string
# \d+ - any digit