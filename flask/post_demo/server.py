from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "No secrets on github"

@app.route('/')
@app.route('/form')
def render_form():
    return render_template("form.html")

@app.route('/process_form', methods=['post'])
def process_form():
    print(request.form)
    session['title'] = request.form['title']
    session['platform'] = request.form['platform']
    session['score'] = request.form['score']
    if request.form['secret_value'] != 'SUPER SECRET':
        return "Get out of here, stop that"
    return redirect('/display')
    # return render_template('display.html',title=title,platform=platform,score=score)

@app.route('/display')
def display():
    if 'title' in session:
        title = session['title']
    else:
        title = "Not Provided"
    #session.get('title') will return None if that key doesn't exist
    return render_template('display.html',title=title)

@app.route('/clear_session')
def clear_session():
    session.clear()
    # del session['title']
    # title = session.pop('title')
    return redirect('/')









if __name__ == '__main__':
    app.run(debug=True)
