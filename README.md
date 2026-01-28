# 📚 Student Task Manager

## 1. Project Title & Goal

The Student Task Manager is a simple full-stack web application that allows users to add, view, update, and delete daily tasks using a single-page interface.

---

## 2. Setup Instructions

Follow the steps below to run the project locally.

### Backend Setup
bash
cd backend
npm install
node server.js

The backend server will start on:

http://localhost:5000

Frontend Setup

Open the frontend folder

Run index.html using Live Server in VS Code
OR

Open index.html directly in a browser

--- 


## 3. The Logic (How I Thought)
Why did I choose this approach?

I chose a simple REST API with a JSON file for storage because the goal of the task was to demonstrate core full-stack concepts rather than complex database design.
Using Node.js + Express made it easy to handle CRUD operations, while vanilla JavaScript on the frontend ensured a lightweight and fast Single Page Application without unnecessary frameworks.

The UI was designed using pure CSS with a glassmorphism-inspired theme to keep it modern while still being easy to understand and implement.

Hardest Bug I Faced & How I Fixed It

The hardest issue I faced was handling inline task editing and delete confirmation without page refresh.
Initially, updating tasks using browser prompts worked functionally but resulted in poor user experience.

To fix this:

I replaced the task text dynamically with an input field for inline editing

Used state re-rendering by refetching tasks after every update/delete

Added a confirmation step before deletion using UI icons instead of browser alerts

This approach improved both usability and code clarity.

I replaced the task text dynamically with an input field for inline editing

Used state re-rendering by refetching tasks after every update/delete

---

## 4. Output Screenshots

Below are screenshots proving that the application works as required.

Application with Multiple Tasks

Add, Edit, and Delete Functionality
<img width="1916" height="865" alt="image" src="https://github.com/user-attachments/assets/81b8546c-7108-49a7-8bdd-2d1206957551" />

---

## 5. Future Improvements

If I had 2 more days, I would add:

Task completion status (mark task as done)

User authentication (login/register)

Database integration (MongoDB or SQLite)

Drag-and-drop task reordering

Dark/Light theme toggle

Better error handling and loading states

----




🌍 Live Deployment

Frontend (Vercel): https://student-task-manager-steel.vercel.app

Backend (Render): https://student-task-manager-3wq2.onrender.com


---


👤 Author

Virendra Prajapat
Engineering Student | Full-Stack Developer
GitHub: https://github.com/virendraPrajapat18

Added a confirmation step before deletion using UI icons instead of browser alerts

This approach improved both usability and code clarity.
