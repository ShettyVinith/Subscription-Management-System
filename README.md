# 💳 Subscription Management System

A backend project for managing real users, real money, and real subscription logic with a secure and scalable architecture.

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT
- **Caching & Rate Limiting:** Upstash Redis
- **Security:** Arcjet, Helmet
- **Email Service:** Nodemailer
- **Dev Tools:** ESLint, Postman, VS Code

## 🔐 Features

- ✅ JWT-based user authentication
- ✅ Role-based access control (user/admin)
- ✅ Subscription lifecycle management (create, update, cancel)
- ✅ Secure API architecture with middleware
- ✅ Workflow automation with Upstash & Arcjet
- ✅ Email notifications using Nodemailer
- ✅ Caching & abuse protection
- ✅ Production-ready project structure

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShettyVinith/Subscription-Management-System.git
   cd Subscription-Management-System
   
2. **Install dependencies**
   ```bash
   npm install

3. **Setup environment variables Create a .env file in the root directory and add:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   UPSTASH_REDIS_URL=your_upstash_url
   ARCJET_API_KEY=your_arcjet_key
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   
4. **Start the development server**
   ```bash
   npm run dev

## 🛡️ Security
- Helmet for secure HTTP headers
- Arcjet for abuse prevention and rate limiting
- Middleware-based error handling and auth verification
- CORS enabled
- Input validation and sanitization



   
