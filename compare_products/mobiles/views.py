from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
# from django.db import models

from mobiles.models import Mobiles_details
from mobiles.serializers import Mobiles_details_Serializers

# Create your views here.

@csrf_exempt
def mobilesApi(request):
    mobiles = Mobiles_details.objects.all()
    mobiles_serializers = Mobiles_details_Serializers(mobiles, many=True)
    return JsonResponse(mobiles_serializers.data, safe=False)