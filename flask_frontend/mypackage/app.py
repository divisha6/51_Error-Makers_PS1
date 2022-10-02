import numpy as np
from flask import Flask, render_template, request
import model as m

app = Flask (__name__)


@app.route("/", methods = ["GET","POST"])
def model():
    if request.method == "POST":
        job = request.form["job"]
        model_pred = m.job_predict(job)
        print(model_pred)
    
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port=5000, debug=True)