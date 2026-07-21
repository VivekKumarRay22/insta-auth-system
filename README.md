# 🔐 Insta Auth System

A modern authentication system inspired by Instagram, built with the **MERN Stack**. This project demonstrates a complete authentication workflow using secure password hashing, JWT authentication, cookies, protected routes, and a React frontend.

---

## 🚀 Features

- 👤 User Registration
- 🔑 Secure Login
- 🔒 Password Hashing with Bcrypt
- 🍪 JWT Authentication using HTTP Cookies
- 🛡️ Protected Routes
- ⚡ React + Vite Frontend
- 🌐 Express.js REST API
- 🍃 MongoDB Database
- 🔄 Persistent Authentication
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- SCSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- BcryptJS
- Cookie Parser
- CORS
- Multer

---

## 📂 Project Structure

```
insta-auth-system/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/VivekKumarRay22/insta-auth-system.git
```

### Move into Project

```bash
cd insta-auth-system
```

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## ▶️ Run the Project

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /auth/register | Register User |
| POST | /auth/login | Login User |
| GET | /auth/get-me | Get Logged-in User |

---

## 📸 Upcoming Features

- ❤️ Like Posts
- 💬 Comments
- 👥 Follow / Unfollow
- 🖼️ Image Upload
- 📝 User Profiles
- 🔍 Search Users
- 📢 Feed System

---

## 📖 What I Learned

During this project I learned:

- Authentication Flow
- JWT Tokens
- HTTP Cookies
- Password Hashing
- React Context API
- REST API Development
- MongoDB Relationships
- Mongoose Models
- Middleware
- MVC Architecture
- File Uploads with Multer

---

## 🤝 Contributing

Contributions, suggestions and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---

## 👨‍💻 Author

**Vivek Kumar Ray**

GitHub: https://github.com/VivekKumarRay22

LinkedIn: https://www.linkedin.com/in/vivek-kumar-ray-25082a226/

---

⭐ If you found this project helpful, don't forget to give it a Star!
