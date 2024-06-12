from flask_app import app
from flask_app.models.dog_model import Dog
from flask import render_template, request, session, redirect


#  table_name/id/action -- RESTful
@app.route('/')
@app.route('/dogs')
def all_dogs():
    all_dogs = Dog.get_all()
    return render_template("dogs_all.html",all_dogs=all_dogs)

@app.route('/dogs/new')
def new_dog():
    return render_template("dogs_new.html")

@app.route('/dogs/<int:id>/view')
def view_one_dog(id):
    data = {
        'id':id
    }
    one_dog = Dog.get_one(data)
    return render_template("dogs_one.html", one_dog=one_dog)

@app.route('/dogs/create', methods=['post'])
def create_dog():
    new_id = Dog.create(request.form)
    return redirect(f'/dogs/{new_id}/view')