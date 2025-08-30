from flask import Flask
from python_chatbot_api.app.routes.routes import routes

def create_app():
    app = Flask(__name__)
    app.register_blueprint(routes)
    return app
