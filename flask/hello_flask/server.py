from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

users = ["Bob","Alex","Alice"]

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/route_two')
def route_two():
    return "This is route two!"

@app.route('/awesome')
def awesome():
    print("User visited the awesome page")
    return "This is awesome"

@app.route("/hello/<name>")
@app.route("/hello/<name>/")
def say_name(name):
    if name == 'Bob':
        return "Get out of here, Bob!"
    return f"<h1> Hello, {name}</h1>"

@app.route("/users/<int:id>")
def get_user(id):
    return users[id]

@app.route("/template")
def serve_temp():
    return render_template("index.html")

@app.route('/fun')
@app.route('/fun/<color>')
def jinja_fun(color='black'):
    ##
    return render_template("jinja_fun.html",jinja_var = "centipedes", users=users,color=color)

@app.route('/list_of_dicts')
def list_of_dicts():
    student_info = [
       {'name' : 'Michael', 'age' : 35},
       {'name' : 'John', 'age' : 30 },
       {'name' : 'Mark', 'age' : 25},
       {'name' : 'KB', 'age' : 27}
    ]
    return render_template("list_of_dicts.html", list_of_dicts=student_info)

@app.errorhandler(404)
def error_page(e):
    return "You must be lost"

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=5001,host='0.0.0.0')    # Run the app in debug mode.