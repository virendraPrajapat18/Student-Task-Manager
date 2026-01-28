# 📚 Student Task Manager

A simple full-stack **Student Task Manager** web application that allows users to add, view, update, and delete daily tasks.  
The project is built as a **Single Page Application (SPA)** and demonstrates basic **CRUD operations**, REST APIs, and clean UI/UX.

---

## 🚀 Live Demo

- **Frontend (Vercel):** (https://student-task-manager-steel.vercel.app/)
- **Backend (Render):** (https://student-task-manager-3wq2.onrender.com)



---

## 🎯 Features

- ➕ Add new tasks  
- 📋 View all tasks without page refresh  
- ✏️ Update tasks using inline editing  
- 🗑 Delete tasks with confirmation  
- 🌐 Single Page Application (SPA) behavior  
- 🎨 Modern, clean, responsive UI  
- 💾 Persistent storage using a JSON file  

---

## 🛠️ Tech Stack

### Frontend
- HTML5  
- CSS3 (Glassmorphism-inspired UI)  
- Vanilla JavaScript  
- Deployed on **Vercel**

### Backend
- Node.js  
- Express.js  
- REST API  
- JSON file for storage  
- Deployed on **Render**

---

## 📂 Project Structure
Student-Task-Manager/
│
├── frontend/
│ ├── index.html
│ ├── styles.css
│ └── script.js
│
├── backend/
│ ├── server.js
│ ├── tasks.json
│ └── package.json
│
└── README.md

## 🔗 API Endpoints

### Get All Tasks
GET /tasks

### Add a Task
POST /tasks  
Body:
{
  "task": "Complete assignment"
}

### Update a Task
PUT /tasks/:id  
Body:
{
  "task": "Updated task text"
}

### Delete a Task
DELETE /tasks/:id


## ▶️ Run Locally

### Clone the repository
git clone https://github.com/virendraPrajapat18/Student-Task-Manager.git
cd Student-Task-Manager

### Run Backend
cd backend
npm install
node server.js

Backend runs on:
http://localhost:5000

### Run Frontend
Open frontend/index.html using Live Server in VS Code



## 🌍 Deployment Notes

- Frontend is deployed on Vercel
- Backend is deployed on Render
- Frontend communicates with backend using REST APIs
- Render free tier may take a few seconds to wake up on first request


## 👤 Author

**Virendra Prajapat**  
Engineering Student | Full Stack Developer  
GitHub: https://github.com/virendraPrajapat18


