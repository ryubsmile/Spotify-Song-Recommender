# Generated by Django 3.2.5 on 2021-07-23 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recommender', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tracks',
            name='artist_id',
        ),
        migrations.AddField(
            model_name='tracks',
            name='artists',
            field=models.CharField(default='', max_length=200),
        ),
    ]
