# Generated by Django 4.0.1 on 2022-01-06 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mobiles_details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=200, unique=True)),
                ('price', models.FloatField(blank=True, null=True)),
                ('photo', models.CharField(blank=True, default=None, max_length=100)),
                ('ram', models.IntegerField(blank=True, null=True)),
                ('internal_storage', models.IntegerField(blank=True, null=True)),
                ('expandable', models.IntegerField(blank=True, null=True)),
                ('display', models.CharField(blank=True, max_length=200)),
                ('camera', models.CharField(blank=True, max_length=100)),
                ('battery', models.CharField(blank=True, max_length=100)),
                ('processor', models.CharField(blank=True, max_length=100)),
                ('link', models.CharField(blank=True, max_length=200)),
                ('warranty', models.CharField(blank=True, max_length=200)),
                ('star', models.FloatField(blank=True, null=True)),
                ('rating_review', models.CharField(blank=True, max_length=200)),
                ('in_the_box', models.CharField(blank=True, max_length=200)),
            ],
        ),
    ]
