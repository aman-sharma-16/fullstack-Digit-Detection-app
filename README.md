# Full Digits Detection App

A full-stack web application that classifies digits from user input. Users writes on canvas and the app predicts the corresponding digit using a machine learning model.

### ⚡ Testing with 8×8 Grayscale Matrices

Currently, the app accepts **canvas drawings**. During testing, we also tried providing **8×8 grayscale matrices** as input.

- The ML model itself achieves **>89% accuracy** on the dataset.
- Prediction errors occur in the app due to **mismatch between the frontend grayscale mapping and the format expected by the model**.
- Proper scaling and preprocessing of matrix inputs will enable accurate predictions, extending the app beyond image uploads.

> Note: The model is highly accurate, but input preprocessing differences are the main source of errors when using 8×8 matrices. You can manually use the model with 8×8 grayscale input provided in the repo.

## 🚀 Features

- Input via canvas drawing
- Real-time digit classification using a trained ML model
- Clean and interactive frontend interface
- Backend API handles preprocessing and model inference
- Fully responsive design

## 🛠️ Tech Stack

### Frontend

- React
- TailwindCSS / ShadCN UI
- Axios / Fetch for API requests

### Backend

- Python 3.11+ with FastAPI
- Machine learning model developed from scratch
- Uvicorn for running the server

### Database

- Optional (e.g., MongoDB or PostgreSQL)

## 📦 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/full-digits-detection-app.git
cd full-digits-detection-app

# client

cd client
npm install

# Server

python -m venv venv # create virtual environment
venv\Scripts\activate # Windows

# OR for macOS/Linux: source venv/bin/activate

install fastapi

# To run

cd client # for client
npm run dev

uvicorn app.main:app --reload # for server
```
