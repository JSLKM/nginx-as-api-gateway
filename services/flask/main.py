from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return 'Test Predictor'

@app.route('/who')
def predict():
    result= jsonify({'services': 'flask'})
    return result

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3002)