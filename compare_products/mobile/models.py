from django.db import models
from django.db.models.deletion import DO_NOTHING

# Create your models here.

class Product_type(models.Model):
    product_name = models.CharField(max_length=200)

    def __str__(self):
        return self.product_name


class Product_details(models.Model):
    company_name = models.CharField(max_length=200, unique = True)
    price = models.FloatField(null=True, blank=True)
    photo = models.CharField(max_length=100, blank=True, default=None)
    ram = models.IntegerField(null=True, blank=True)
    internal_storage = models.IntegerField(null=True, blank=True)
    expandable = models.IntegerField(null=True, blank=True)
    display = models.CharField(max_length=200, blank=True)
    camera = models.CharField(max_length=100, blank=True)
    battery = models.CharField(max_length=100, blank=True)
    processor = models.CharField(max_length=100, blank=True)
    link = models.CharField(max_length=200, blank=True)
    warranty = models.CharField(max_length=200, blank=True)
    star = models.FloatField(null=True, blank=True)
    rating_review = models.CharField(max_length=200, blank=True)
    in_the_box = models.CharField(max_length=200, blank=True)
    product_type = models.ForeignKey(Product_type, blank=True, null=True, on_delete=DO_NOTHING)

    def __str__(self):
        return self.company_name