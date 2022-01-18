from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
# from django.db import models

from mobiles.models import Mobiles
from mobiles.serializers import Mobiles_Serializers, Mobiles_Serializers_Details

# Create your views here.

@csrf_exempt
def mobilesApi(request):
    mobiles = Mobiles.objects.all()
    mobiles_serializers = Mobiles_Serializers(mobiles, many=True)
    return JsonResponse(mobiles_serializers.data, safe=False)

@csrf_exempt
def mobilesApi(request):
    mobiles = Mobiles.objects.get(id=mobiles.id)
    mobiles_serializers_details = Mobiles_Serializers_Details(mobiles, many=True)
    return JsonResponse(mobiles_serializers_details.data, safe=False)

