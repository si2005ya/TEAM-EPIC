# 🌍 Traveloop — Smart Travel Booking Platform

## 📌 Overview

Traveloop is a modern full-stack travel booking platform built using Node.js, Express.js, PostgreSQL, and a responsive frontend stack. The project is designed to provide users with a seamless travel booking experience while offering scalable backend architecture, secure authentication, and a premium user interface.

The platform supports:

* User Authentication
* Travel Package Management
* Booking System
* PostgreSQL Database Integration
* REST APIs
* Admin Functionalities
* Responsive Modern UI

---

# 🚀 Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Responsive Design
* Modern Animations

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL
* pg Package

## Authentication & Security

* JWT Authentication
* bcryptjs Password Hashing
* dotenv Environment Variables
* CORS

## Development Tools

* Nodemon
* Postman
* pgAdmin
* VS Code

---

# 📁 Project Structure

```bash
TEAM-EPIC-main/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   ├── database/
│   │   └── schema.sql
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── pages/
│   └── index.html
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Step 1 — Clone or Extract Project

Extract the ZIP file or clone the repository.

```bash
git clone <repository-url>
```

---

# 🛠️ Backend Setup

## Step 2 — Open Backend Folder

```bash
cd backend
```

---

## Step 3 — Install Dependencies

```bash
npm install
```

If dependencies are missing, install manually:

```bash
npm install express pg dotenv cors bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

---

# 🐘 PostgreSQL Setup

## Step 4 — Install PostgreSQL

Install:

* PostgreSQL
* pgAdmin

Official Download:
[https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)

---

## Step 5 — Create Database

Open pgAdmin.

Create database:

```sql
traveloop
```

---

## Step 6 — Configure Environment Variables

Create `.env` file inside backend folder.

```env
PORT=5000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=traveloop
DB_PASSWORD=2505
DB_PORT=5432

JWT_SECRET=traveloopsecret
```

---

# 🔌 Database Connection

## db.js

Located inside:

```bash
backend/config/db.js
```

This file connects the Express backend with PostgreSQL using the `pg` package.

---

# ▶️ Running the Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# ✅ Successful Output

```bash
PostgreSQL Connected Successfully
Server running on port 5000
```

---

# 🌐 Backend Test

Open browser:

```bash
http://localhost:5000
```

Expected Output:

```txt
Traveloop Backend Running
```

---

# 🗄️ Database Schema

## Users Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Packages Table

```sql
CREATE TABLE packages (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    destination VARCHAR(255),
    description TEXT,
    price NUMERIC,
    duration VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Bookings Table

```sql
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    package_id INTEGER REFERENCES packages(id),
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50)
);
```

---

## Reviews Table

```sql
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    package_id INTEGER REFERENCES packages(id),
    rating INTEGER,
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```