🧪 Medical Laboratory Management System (Backend)

A role-based Medical Laboratory Management System built using Node.js, Express, and MongoDB, where owners, staff, and patients can access the same database with different permissions. This project focuses on backend architecture, authentication, authorization, and clean engineering practices.

📌 Project Overview

This system is designed for a medical laboratory where:
Owner (Admin) has full control over staff and patients
Staff can manage assigned patients and lab reports
Patients can securely view their own medical reports
All users share the same database, but access is controlled using role-based authorization (RBAC).
This project is built backend-first to ensure strong fundamentals before adding frontend features.

👥 User Roles & Permissions
👑 Owner (Admin)

View and manage staff accounts
View all patients
Track staff performance (patients attended, reports created)
Full system access

🧑‍⚕️ Staff

View assigned patients
Create and update lab reports
View their own performance data

🧑‍🦱 Patient

Login securely
View only their own medical reports
No access to other users’ data

🛠️ Tech Stack
Backend

Node.js
Express.js
MongoDB
Mongoose
Authentication & Security
bcrypt (password hashing)
Sessions / JWT (to be implemented)
Role-Based Access Control (RBAC)
Frontend (Planned)
EJS (Server-side rendering)
Deployment (Planned)
Render / Railway (backend)
Vercel (frontend later)

📁 Project Folder Structure
medical-lab-system/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── views/        # EJS templates (future)
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── README.md


🧠 Learning Goals of This Project

This project is intentionally designed to practice:
Backend project structuring
Authentication & authorization
Role-based access control (RBAC)
MongoDB schema design
MVC architecture
Git & GitHub best practices
Deployment fundamentals

🔮 Roadmap (Planned Features)

 User registration & login
 
 Password hashing with bcrypt

 Role-based authorization middleware

 Owner dashboard

 Staff dashboard

 Patient dashboard

 Lab report management

 EJS frontend integration

 Deployment

📜 License

This project is for learning and portfolio purposes.

🙌 Author

Ramesh Raveendran
Aspiring Backend / Full-Stack Developer
Built with focus on clean architecture and real-world practices.