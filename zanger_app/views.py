from django.shortcuts import render 


def index(request):
    
    return render(request, 'zanger_app/index.html') 

