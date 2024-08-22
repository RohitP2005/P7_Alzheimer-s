# Alzheimer's Classification Using CT Scan Images

This project is designed to classify Alzheimer's disease stages based on CT scan images. The core of the classification model is built using **Keras** (TensorFlow backend), with a **Flask** API to handle image processing and classification requests. The frontend is built using **React** to provide a user-friendly interface for uploading images and viewing results.

## Features

- **Image Classification**: Classifies Alzheimer's disease into different stages (e.g., mild, moderate, severe) using CT scan images.
- **Model Training**: Built using Keras and TensorFlow, trained on a dataset of CT scan images.
- **REST API**: Flask API for handling image uploads, preprocessing, and model inference.
- **Responsive UI**: React frontend allows users to upload CT scan images and view classification results.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Python Flask, Keras, TensorFlow
- **Deep Learning**: Keras (TensorFlow backend)
- **Version Control**: Git

## Installation

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js (v14+)
- Python (v3.8+)
- Git
- TensorFlow (v2.0+)

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/alzheimers-ct-classification.git
    cd alzheimers-ct-classification
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. **Install frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the `backend` directory and add the following variables:
    ```bash
    FLASK_APP=app.py
    MODEL_PATH=path_to_your_trained_model.h5
    ```

5. **Run the backend server**:
    ```bash
    cd backend
    flask run
    ```

6. **Run the React frontend**:
    Open a new terminal, and run:
    ```bash
    cd frontend
    npm start
    ```

7. **View the app**:
    Visit `http://localhost:3000` in your browser to interact with the Alzheimer's classification tool.

## Project Structure

```plaintext
├── backend
│   ├── app.py
│   ├── model
│   │   └── alzheimers_classifier.py
│   ├── static
│   │   └── uploads
│   ├── templates
│   ├── requirements.txt
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   ├── public
│   └── package.json
└── README.md
