from flask import Flask, request, jsonify, render_template
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get("message", "")
        character_prompt = data.get("prompt", "")

        if not openai.api_key:
            return jsonify({"error": "Geen API key gevonden in omgeving"}), 500

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": character_prompt},
                {"role": "user", "content": message}
            ],
            temperature=0.7
        )

        answer = response['choices'][0]['message']['content']
        return jsonify({"response": answer})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    answer = response['choices'][0]['message']['content']
    return jsonify({"response": answer})
