from flask import Flask, render_template, request
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
# socketio = SocketIO(app)
socketio = SocketIO(app)

f = open("log.txt", 'w')


@socketio.on('object')
def handle_my_custom_event(obj):
    print(str(obj))

@socketio.on('score')
def score_handle_from_html(data):
    print(str(data))


@app.route('/')
def taking_instruction():
    return render_template('index.html')


if __name__ == '__main__':
    socketio.run(app, host='http://127.0.0.1:5000/', debug=True)
