from test import Val
from flask import Flask, jsonify, request 
from flask_cors import CORS, cross_origin
app = Flask(__name__)  
CORS(app, support_credentials=True)

import pandas as pd
sheet_url = "https://docs.google.com/spreadsheets/d/16RE7pBXG9-KStl_lA-JJidXdc1dIDoMHiOk9SL-fKfs/edit#gid=0"
url_1 = sheet_url.replace('/edit#gid=', '/export?format=csv&gid=')



@app.route('/') 
@cross_origin(supports_credentials=True)

def home():  
    df = pd.read_csv(url_1)
    return jsonify(Val(df))


  
if __name__ =='__main__':  
    app.run(debug = True)  



