# Final Year Project – Emotion Detection

This repository contains the core components of my Final Year Project titled **"Emotion Detection Using Deep Learning"**.

## About the Project

The goal of this project is to build an intelligent journaling and sleep-assistance platform that detects emotions from user-written text using deep learning techniques. Users can write about their day, and the system analyzes the text to classify emotions such as happiness, sadness, anger, and more.

The classified emotion is then used to generate personalized, comforting responses using a GPT-based language model. The app also offers relaxing content like music, sleep stories, and emotional wellness tracking through a user-friendly interface.

Technologies used include:
- **BiLSTM with GloVe embeddings** for emotion detection
- **DistilGPT-2** for generating supportive messages
- **React** for frontend development
- **Flask** for backend API integration

## Project Structure

I have added the **frontend files** (React) and one backend file which ids the app.py used for the web interface oand integration of BiLSTM model with the Journal page. Due to large file sizes, I was **unable to upload all of the website files** and certain assets/models in this repository.

## Jupyter Notebooks Included

This project includes three main notebooks located in the `notebooks/` folder:

1. **Baseline Models Implementation**  
   Implements initial machine learning classifiers like Logistic Regression, Naive Bayes, and Random Forest to establish benchmark performance.

2. **Hyperparameter Tuning**  
   Covers optimization and cross-validation for both traditional ML models and LSTM-based models.

3. **Final BiLSTM Model**  
   Contains the full pipeline — from preprocessing, embedding, model training, and evaluation — using a stacked Bidirectional LSTM architecture for emotion classification.

- Link to dataset:  https://www.kaggle.com/datasets/pashupatigupta/emotion-detection-from-text
- You just needs to download this dataset and you can run the notebooks to see how they work!
