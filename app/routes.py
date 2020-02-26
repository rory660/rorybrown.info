from flask import render_template
from app import app, portfolio

pf = portfolio.Portfolio.fromFile("app/data/portfolio.json")

@app.route("/")
@app.route("/index")
def index():
    repos = pf.getRepos()
    return render_template("index.html", repos = repos)