from flask import Flask, render_template
#from flask_sqlalchemy import SQLAlchemy
#from flask_login import UserMixin
#from werkzeug.security import generate_password_hash, check_password_hash

app = Flask('app')


@app.route('/')
def home():
  return render_template("survivorbingo.html")

@app.route('/killer')
def killer():
  return render_template("killerbingo.html")

@app.route('/login')
def login():
  return render_template("login.html")


"""@app.route('/survivor-bingo')
def survivor_bingo():
"""
  

app.run(host='0.0.0.0', port=8080)
