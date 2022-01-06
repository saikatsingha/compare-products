from rest_framework import serializers
from mobiles.models import Mobiles_details

class Mobiles_details_Serializers(serializers.ModelSerializer):
    class Meta:
        model = Mobiles_details
        fields = ('company_name',
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