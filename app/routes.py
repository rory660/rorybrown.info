from flask import render_template
from app import app, portfolio

# pf = portfolio.Portfolio.fromFile("app/data/portfolio.json")

@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/tutoring")
def tutoring():
    return render_template("tutoring.html")