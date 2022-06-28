from posixpath import split
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt, csrf_protect

from django.urls import reverse
from .nim import train, play, Nim
import random
import json
import ast
# Create your views here.
ai = train(1000)


def index(req):
    return render(req, 'app/index.html')


def game(req):
    # play(ai)
    # If no user is signed in, return to login page:
    # if not req.user.is_authenticated:
    #     return HttpResponseRedirect(reverse("sign_in"))
    return render(req, 'app/game.html')

# if req.session.get('has_commented', False):
#     return HttpResponse("You've already commented.")
# req.session['has_commented'] = True
# try:
#     del request.session['member_id']
# except KeyError:
#     pass


@csrf_exempt
def api(req):
    if req.method == 'POST':
        input = req.body.decode("utf-8", "strict")
        input = json.JSONDecoder().decode(input)
        gameBoard = input['state']
        gameBoard = ast.literal_eval(gameBoard)
        pile, count = ai.choose_action(gameBoard, epsilon=False)
        print(f"pile : {pile}, count : {count}")
        return JsonResponse({'pile': f"{pile}", 'count': f"{count}"})
    else:
        return HttpResponse("Hello world")


@csrf_exempt
def demo(req):
    if req.method == "POST":
        a = str(req.body.decode("utf-8", "strict"))
        print(a)
        b = a.split(',')
        gameBoard = []
        for i in b:
            gamePile = int(i)
            gameBoard.append(gamePile)
        pile, count = ai.choose_action(gameBoard, epsilon=False)

        print(f"pile : {pile}, count : {count}")
        response = JsonResponse({'pile': f"{pile}", 'count': f"{count}"})
        return response

    return render(req, 'app/demo.html', {
        "message": "Hello..."
    })

def sign_in(req):
    if req.method == "POST":
        # Accessing username and password from form data
        username = req.POST["username"]
        password = req.POST["password"]

        # Check if username and password are correct, returning User object if so
        user = authenticate(req, username=username, password=password)

        # If user object is returned, log in and route to index page:
        if user:
            login(req, user)
            return HttpResponseRedirect(reverse("index"))
        # Otherwise, return login page again with new context
        else:
            return render(req, "app/sign-in.html", {
                "message": "Invalid Credentials"
            })
    return render(req, "app/sign-in.html")


def sign_up(req):
    if req.method == "POST":
        # Accessing username and password from form data
        username = req.POST["username"]
        password = req.POST["password"]
        password_confirmation = req.POST["password_confirmation"]
        print("Ok!")

        # if password != password_confirmation:
        #     return render(req, "app/sign-up.html", {
        #         "message": "The two password fields didn’t match."
        #     })
        # else:
        #     # check if user with the username exist in database

        #     new_user = User(username=username, password=password)
        #     new_user.save()
        #     return render(req, "app/sign-up.html", {
        #         "message": "signed up successfully"
        #     })

    return render(req, "app/help.html")


def sign_out(req):
    logout(req)
    return render(req, "app/sign-in.html", {
        "message": "Logged Out"
    })
