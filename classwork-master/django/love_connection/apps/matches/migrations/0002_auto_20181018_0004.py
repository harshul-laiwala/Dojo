# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-10-18 00:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='match',
            old_name='user',
            new_name='user_from',
        ),
        migrations.RenameField(
            model_name='match',
            old_name='matched_user',
            new_name='user_to',
        ),
    ]