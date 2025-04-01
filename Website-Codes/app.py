from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load BiLSTM model for emotion detection
model = tf.keras.models.load_model("Best_model1.keras")

# Load tokenizer and label encoder
with open("BestTokenizer1.pkl", "rb") as f:
    tokenizer = pickle.load(f)
with open("BestLabelEncoder.pkl", "rb") as f:
    le = pickle.load(f)

# Clean input text
def clean_text(text):
    return text.lower()

# Predict emotion
def predict_emotion(text):
    cleaned = clean_text(text)
    seq = tokenizer.texts_to_sequences([cleaned])
    padded = pad_sequences(seq, maxlen=100, padding='post')
    pred = model.predict(padded)
    emotion = le.inverse_transform([np.argmax(pred)])[0]
    return emotion

# Rule-based response generation
def generate_gpt_response(emotion, user_text):
    word_count = len(user_text.split())

    long_responses = {
        "sadness": "I'm really sorry you're feeling this way. It's okay to have tough days. You're not alone — things will get better with time.",
        "happiness": "That's wonderful to hear! Keep embracing that joy and let it light up your day.",
        "anger": "It's okay to feel angry sometimes. Take a moment to breathe — you're doing your best.",
        "love": "Love is powerful. Keep spreading that warmth — the world needs it.",
        "worry": "Worrying can be exhausting. Just take one step at a time. You’ve got this.",
        "relief": "I'm so glad you're feeling relieved. You deserve peace and calm.",
        "boredom": "Boredom can be a sign to try something new. Maybe explore something you’ve always wanted to do?",
        "surprise": "Surprises can be exciting or scary — either way, you're handling it just fine.",
        "enthusiasm": "That enthusiasm is amazing! Keep riding that wave of positivity.",
        "fun": "So good to hear you're having fun! Keep enjoying every moment.",
        "neutral": "It’s okay to feel neutral. Just being is enough sometimes.",
        "hate": "Hate is a heavy feeling. Take care of yourself — and try to focus on what brings peace.",
        "empty": "Feeling empty is tough. You're not alone — and your feelings are valid."
    }

    short_responses = {
        "sadness": "I'm here for you.",
        "happiness": "That's great to hear!",
        "anger": "You're allowed to feel that way.",
        "love": "That's beautiful.",
        "worry": "It’ll be okay.",
        "relief": "That’s a relief!",
        "boredom": "Maybe try something new?",
        "surprise": "Whoa, didn’t see that coming!",
        "enthusiasm": "Love that energy!",
        "fun": "Sounds fun!",
        "neutral": "That’s totally okay.",
        "hate": "Try to breathe and let it go.",
        "empty": "You matter — even on quiet days."
    }

    if word_count > 10:
        return long_responses.get(emotion, "Thanks for sharing. Be kind to yourself.")
    else:
        return short_responses.get(emotion, "Thank you for expressing yourself.")

# Flask API route
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    user_text = data.get("text", "")

    if not user_text:
        return jsonify({"error": "No input text provided"}), 400

    emotion = predict_emotion(user_text)
    reply = generate_gpt_response(emotion, user_text)

    return jsonify({
        "emotion": emotion,
        "response": reply
    })

# Run app
if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import tensorflow as tf
# from transformers import GPT2LMHeadModel, GPT2Tokenizer
# import numpy as np
# import pickle
# from tensorflow.keras.preprocessing.sequence import pad_sequences

# # Initialize Flask app
# app = Flask(_name_)
# CORS(app)

# # Load BiLSTM model
# model = tf.keras.models.load_model("bilstm_model.keras")

# # Load tokenizer and label encoder
# with open("tokenizer.pkl", "rb") as f:
#     tokenizer = pickle.load(f)
# with open("label_encoder.pkl", "rb") as f:
#     le = pickle.load(f)

# # Load GPT-2 model and tokenizer from local folder
# gpt_tokenizer = GPT2Tokenizer.from_pretrained("gpt2_model")
# gpt_model = GPT2LMHeadModel.from_pretrained("gpt2_model")

# # Custom tailored prompts for each emotion
# custom_prompts = {
#     "anger": "The user is feeling angry. Say something calm and understanding to help them feel heard.",
#     "boredom": "The user is feeling bored. Say something fun or interesting to lift their mood.",
#     "empty": "The user is feeling empty. Offer a comforting message to remind them they matter.",
#     "enthusiasm": "The user is feeling enthusiastic. Encourage their energy and celebrate with them.",
#     "fun": "The user is having fun. Keep the joyful vibe going with a playful response.",
#     "happiness": "The user is feeling happy. Respond with excitement and positivity.",
#     "hate": "The user is feeling hate. Respond gently and guide them toward a calmer perspective.",
#     "love": "The user is feeling love. Reinforce it with a warm, sincere message.",
#     "neutral": "The user is feeling neutral. Provide a thoughtful, simple response.",
#     "relief": "The user is feeling relieved. Respond with a peaceful and affirming message.",
#     "sadness": "The user is feeling sad. Say something kind and supportive to help them feel better.",
#     "surprise": "The user is feeling surprised. Acknowledge their surprise and respond thoughtfully.",
#     "worry": "The user is feeling worried. Reassure them and offer words of comfort."
# }

# # Basic text cleaner (customize as needed)
# def clean_text(text):
#     return text.lower()

# # Predict emotion using BiLSTM
# def predict_emotion(text):
#     cleaned = clean_text(text)
#     seq = tokenizer.texts_to_sequences([cleaned])
#     padded = pad_sequences(seq, maxlen=100, padding='post')
#     pred = model.predict(padded)
#     emotion = le.inverse_transform([np.argmax(pred)])[0]
#     return emotion

# # Generate GPT-2 response using custom prompt
# def generate_gpt_response(emotion, user_text):
#     prompt_intro = custom_prompts.get(emotion, f"The user is feeling {emotion}. Respond kindly.")
#     full_prompt = f"{prompt_intro} They said: {user_text} \nResponse:"
#     input_ids = gpt_tokenizer.encode(full_prompt, return_tensors="pt")
#     output = gpt_model.generate(input_ids, max_length=100, pad_token_id=gpt_tokenizer.eos_token_id)
#     response = gpt_tokenizer.decode(output[0], skip_special_tokens=True)
#     return response.replace(full_prompt, "").strip()

# # Flask API endpoint
# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json()
#     user_text = data.get("text", "")

#     if not user_text:
#         return jsonify({"error": "No input text provided"}), 400

#     emotion = predict_emotion(user_text)
#     gpt_reply = generate_gpt_response(emotion, user_text)

#     return jsonify({
#         "emotion": emotion,
#         "response": gpt_reply
#     })

# # Run the app
# if _name_ == '_main_':
#     app.run(debug=True)
