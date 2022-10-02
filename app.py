import numpy as np
from flask import Flask, render_template, request
import model

app = Flask (__name__)


@app.route("/", methods = ['POST'])
def home():
    return model

@app.route('/')
def intro():
    if request.method == "POST":
        name = request.form['fname']
        mode_pred = model.predict()
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port=5000, debug=True)