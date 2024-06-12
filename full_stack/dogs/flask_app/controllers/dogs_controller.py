from flask_app import app
from flask_app.models.dog_model import Dog
from flask import render_template, request, session, redirect


#  table_name/id/action -- RESTful
#Get all
@app.route('/')
@app.route('/dogs')
def all_dogs():
    all_dogs = Dog.get_all()
    return render_template("dogs_all.html",all_dogs=all_dogs)

#Get one dog
@app.route('/dogs/<int:id>/view')
def view_one_dog(id):
    data = {
        'id':id
    }
    one_dog = Dog.get_one(data)
    return render_template("dogs_one.html", one_dog=one_dog)

#New dog form
@app.route('/dogs/new')
def new_dog():
    return render_template("dogs_new.html")

#Process new dog form (create new dog)
@app.route('/dogs/create', methods=['post'])
def create_dog():
    new_id = Dog.create(request.form)
    return redirect(f'/dogs/{new_id}/view')

#Delete dog
@app.route('/dogs/<int:id>/delete')
def delete_dog(id):
    Dog.delete({'id':id})
    return redirect('/dogs')

#Edit Dog Form
@app.route('/dogs/<int:id>/edit')
def edit_dog(id):
    data = {
        'id':id
    }
    one_dog = Dog.get_one(data)
    return render_template("dogs_edit.html", one_dog=one_dog)

#Update Dog Route
@app.route('/dogs/<int:id>/update', methods=['post'])
def update_dog(id):
    data = {
        'name': request.form['name'],
        'age': request.form['age'],
        'breed': request.form['breed'],
        'id':id
    }
    #unpacking syntax, makes the same dict but quicker
    data_two = {
        **request.form,
        'id':id
    }
    Dog.update(data_two)
    return redirect('/dogs')