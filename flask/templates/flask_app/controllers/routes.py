from flask_app import app
from flask import render_template

cat_toys = [
    {'name':'Grey Mouse',
     'img':'toy1',
    },
    {'name':'Rainbow Mouse',
     'img':'toy2',
    },
    {'name':'Wand Toy',
     'img':'toy3',
    }
]

@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/cats')
def one():
    return render_template('cats/cats.html')

@app.route('/cats/pics')
def one_one():
    return render_template('cats/sub1.html')

@app.route('/cats/facts')
def one_two():
    return render_template('cats/sub2.html')

@app.route('/cats/toys')
def toys():
    return render_template('cats/toys.html',cat_toys=cat_toys)

