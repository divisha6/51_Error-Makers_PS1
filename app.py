import numpy as np
from flask import Flask, render_template, request
import model

app = FLask (__name__)


@app.route('/')
def home():
    return model

if __name__ == "__main__":
    app.run(port=5000, debug=True)