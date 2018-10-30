# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import random
import datetime
from django.shortcuts import render, redirect

# Create your views here.
def index(request):
  print "got here2"
  if 'gold' not in request.session:
    request.session['gold'] = 0
  if 'append' not in request.session:
    request.session['append'] = []

  request.session['farm'] = random.randrange(10,20)
  request.session['cave'] = random.randrange(5,10)
  request.session['house'] = random.randrange(2,5)
  request.session['casino'] = random.randrange(-50,50)
  return render(request, 'ninjagold/index.html')

def gold(request, location):
  print location
  if request.POST['location'] == 'farm':
    request.session['gold'] += request.session['farm']
    request.session['append'].insert(0, "Gained " + str(request.session['farm']) + " from the farm. " + str(datetime.datetime.now()))
  if request.POST['location'] == 'cave':
    request.session['gold'] += request.session['cave']
    request.session['append'].insert(0, "Gained " + str(request.session['cave']) + " from the cave. " + str(datetime.datetime.now()))
  if request.POST['location'] == 'house':
    request.session['gold'] += request.session['house']
    request.session['append'].insert(0, "Gained " + str(request.session['house']) + " from the house " + str(datetime.datetime.now()))
  if request.POST['location'] == 'casino':
    request.session['gold'] += request.session['casino']
    request.session['append'].insert(0, str(request.session['casino']) + " from the casino " + str(datetime.datetime.now()))
  return redirect('/ninjagold')

def reset(request):
  request.session.clear()
  return redirect('/ninjagold')