from rest_framework import generics

from mobiles.models import Mobiles
from mobiles.serializers import Mobiles_Serializers

class MobileList(generics.ListAPIView):
    queryset = Mobiles.objects.all()
    serializer_class = Mobiles_Serializers


class MobileDetails(generics.RetrieveAPIView):
    queryset = Mobiles.objects.all()
    serializer_class = Mobiles_Serializers







