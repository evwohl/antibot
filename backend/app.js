from flask import Flask
from flask_cors import CORS
from flask import request
app = Flask(__name__)
cors = CORS(app, resources={r"/abbackend/*": {"origins": "*"}})
from datetime import date




cookieJar = []
today = str(date.today()).split('-')[2]
print(today)
@app.route("/abbackend/mm/", methods = ['POST'])
def validate():
    cookie = request.form.get('ab1')
    print("Cookie is now validated.")
    cookieJar.append(cookie)
@app.route(f"/isvalid")
def isvalid():
    if request.cookies.get('ab1') in cookieJar:
        return True
    return False
