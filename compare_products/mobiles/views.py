from rest_framework import generics
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response


# from django.db import models

from mobiles.models import Mobiles
from mobiles.serializers import Mobiles_Serializers

# Create your views here.

class MobileList(generics.ListAPIView):
    queryset = Mobiles.objects.all()
    serializer_class = Mobiles_Serializers
    
    
   
class MobileDetails(generics.RetrieveAPIView):
    queryset = Mobiles.objects.all()
    serializer_class = Mobiles_Serializers







