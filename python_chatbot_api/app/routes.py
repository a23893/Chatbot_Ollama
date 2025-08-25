from flask import Blueprint
from app.controllers.chatbot_controller import chat

routes = Blueprint("routes", __name__)

routes.route("/chat", methods=["POST"])(chat)
