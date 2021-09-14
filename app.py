from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/beginner")
def beginner():
    return render_template('beginner.html')

@app.route("/intermediate")
def intermediate():
    return render_template('intermediate.html')

@app.route("/master")
def master():
    return render_template('master.html')

if __name__=="__main__":
    app.run(debug=True)