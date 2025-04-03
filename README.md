# Final Year Project – Emotion Detection

This repository contains the core components of my Final Year Project titled **"Emotion Detection Using Deep Learning"**.

---

## About the Project

The goal of this project is to develop an intelligent journaling and sleep-assistance platform that detects emotions from user-written text using deep learning.

Users can write about their day, and the system analyzes the text to classify emotions such as happiness, sadness, anger, and more. Based on the predicted emotion, the system:

- Generates personalized comforting responses using a GPT-based language model
- Offers relaxing content like music, sleep stories, and emotional wellness tracking
- Provides a friendly and intuitive web interface

---

## Technologies Used

- BiLSTM with GloVe embeddings for emotion classification
- DistilGPT-2 for generating therapeutic responses
- React.js for frontend development
- Flask for backend integration

---

## Project Structure

Due to file size limitations, I was unable to upload all website files and model assets. However, the repository includes the essential frontend (React.js) and backend (`app.py`) files inside the `Website-Codes` folder to demonstrate the working integration between the journal and the BiLSTM emotion model.

A video demo has also been included to show how the full system works.

---

## Jupyter Notebooks Included

You’ll find four main notebooks in the `Jupyter-Notebook-Training-Codes` folder. Please run them in the following order for best results:

1. **Baseline_Model.ipynb**  
   Implements benchmark classifiers like Logistic Regression, Naive Bayes, and Random Forest.

2. **BestModel1.ipynb**  
   Trains and saves the best-performing BiLSTM model along with:
   - `model.keras`  
   - `BestTokenizer1.pkl`  
   - `BestLabelEncoder.pkl`

3. **HT_Final.ipynb**  
   Performs hyperparameter tuning. You can use this to validate that the parameters used in `BestModel1` are optimal.

4. **Test_Model.ipynb**  
   Allows users to input their own custom text and test it using the saved model, tokenizer, and label encoder.

Important: Please change the file path when reading the dataset CSV file to match your own local directory, as the paths used in the notebook may not work directly on your system.

---

## Folders

- `Website-Codes/`: Contains the core frontend (`.js`) and backend (`app.py`) files.
- `Jupyter-Notebook-Training-Codes/`: Includes all model training, tuning, and testing notebooks.

---

## Dataset

- Source: [Emotion Detection from Text – Kaggle](https://www.kaggle.com/datasets/pashupatigupta/emotion-detection-from-text)
- Simply download the dataset and update the path in the notebooks to run them smoothly.

---

## Demo

A demonstration video is included in this repository to showcase the complete flow of the platform — from journaling to emotion detection and personalized feedback.

---

## Note

Due to GitHub's file size limitations, I was unable to include the full web application with all dependencies and models. However, the repository includes the essential files needed to understand and test the system's functionality end-to-end.

---

Thank you for checking out my project. Feel free to explore the code, run the notebooks, and watch the demonstration video which is in the the `Website-Codes/` Folder
