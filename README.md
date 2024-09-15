# fruit.ai_project

Fruit.ai - Health Manager Product
Fruit.ai is a health manager application designed to help users manage and interact with fruit-related information. It features a user-friendly interface with functionalities including a chatbot, language translator, FAQ management, and more. This project includes a React frontend and a FastAPI backend, both deployed publicly.

Table of Contents
Project Overview
Frontend Setup
Backend Setup
Deployment
API Endpoints
Design Decisions
Contributing
License
Project Overview
Fruit.ai includes the following features:

Login Page: Simple authentication with dummy credentials.
Home Page: Navigation hub to access Chatbot, Translator, FAQ, and About pages.
Chatbot Page: Interactive chatbot displaying fruit cards and details.
Translator Page: Translates text into regional languages.
FAQ Page: Manages FAQs with CRUD functionality.
About Page: Provides information about the Fruit.ai product.
Frontend Setup
Prerequisites
Node.js and npm installed on your local machine.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/fruit-ai-frontend.git
cd fruit-ai-frontend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy code
REACT_APP_API_URL=https://your-backend-api-url.com
Start the development server:

bash
Copy code
npm start
Access the frontend at http://localhost:3000.

Building for Production
To build the frontend for production:

bash
Copy code
npm run build

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/fruit-ai-backend.git
cd fruit-ai-backend
Create and activate a virtual environment:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run the development server:

bash
Copy code
uvicorn main:app --reload
Access the backend at http://localhost:8000.

Deployment
Frontend and Backend:
Deployed on Render.
