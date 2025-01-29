from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='/', static_url_path='/')

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
#   http://127.0.0.1:5000/index.html