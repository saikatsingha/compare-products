from rest_framework import serializers
from mobiles.models import Mobiles

class Mobiles_Serializers(serializers.ModelSerializer):
    class Meta:
        model = Mobiles
        fields = ('id',
                  'company_name',
                  'price',
                  'photo',
                  'ram',
                  'internal_storage',
                  'expandable',
                  'display',
                  'camera',
                  'battery',
                  'processor',
                  'link',
                  'warranty',
                  'star',
                  'rating_review',
                  'in_the_box')