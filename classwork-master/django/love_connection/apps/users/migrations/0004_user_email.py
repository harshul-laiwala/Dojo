# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-10-11 00:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_matches'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.CharField(default='test@test.com', max_length=255),
            preserve_default=False,
        ),
    ]
