# 💳 Subscription Management System

A backend project for managing real users, real money, and real subscription logic with a secure and scalable architecture.

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT
- **Caching & Rate Limiting:** Upstash Redis
- **Security:** Arcjet, Helmet
- **Email Service:** Nodemailer
- **Dev Tools:** ESLint, Postman, VS Code

---

## 🔐 Features

- ✅ JWT-based user authentication
- ✅ Role-based access control (user/admin)
- ✅ Subscription lifecycle management (create, update, cancel)
- ✅ Secure API architecture with middleware
- ✅ Workflow automation with Upstash & Arcjet
- ✅ Email notifications using Nodemailer
- ✅ Caching & abuse protection
- ✅ Production-ready project structure

---

## 📁 Project Structure

/config → env vars, email, Redis, Arcjet config
/controllers → business logic for routes
/models → Mongoose schemas
/routes → all API endpoints
/middlewares → authentication, error handling, Arcjet
/utils → helper functions (email templates, email sending)
/database → MongoDB connection
index.js → entry point

---

## ⚙️ Getting Started

### 1. Clone the repository

git clone https://github.com/ShettyVinith/Subscription-Management-System.git
cd Subscription-Management-System

### 2. Install dependencies
bash
Copy
Edit
npm install

### 3. Setup environment variables
Create a .env file in the root directory and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
UPSTASH_REDIS_URL=your_upstash_url
ARCJET_API_KEY=your_arcjet_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

### 4. Start the development server
npm run dev

🧪 API Testing
Use Postman or Thunder Client to test the following routes:

🔐 Auth Routes
POST /api/auth/register – Register a new user

POST /api/auth/login – Login and receive JWT

👤 User Routes
GET /api/user/profile – Get user profile

📦 Subscription Routes
GET /api/subscriptions – Get all subscriptions

POST /api/subscriptions/create – Create new subscription

PUT /api/subscriptions/:id – Update a subscription

DELETE /api/subscriptions/:id – Cancel/delete a subscription

🔄 Workflow Routes
POST /api/workflows/run – Trigger workflow (e.g. renewal reminders)

🛡️ Security
Helmet for secure HTTP headers

Arcjet for abuse prevention and rate limiting

Middleware-based error handling and auth verification

CORS enabled

Input validation and sanitization

📬 Future Improvements
 Stripe or Razorpay payment integration

 Admin dashboard (React frontend)

 CI/CD deployment pipeline

 Integration/unit testing (Jest, Supertest)

 API docs with Swagger or Postman

👨‍💻 Author
Vinith Shetty
GitHub – @ShettyVinith

Found this helpful? Feel free to star ⭐ the repo, fork it, or contribute with pull requests!
```
