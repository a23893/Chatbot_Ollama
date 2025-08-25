from flask import request, jsonify
from app.models.chatbot_model import Chatbot

chatbot = Chatbot()

def chat():
    data = request.get_json()
    user_input = data.get("message", "")

    if not user_input:
        return jsonify({"error": "Message is required"}), 400

    response = chatbot.ask(user_input)
    return jsonify({"response": response})
