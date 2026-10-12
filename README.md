# JWT Authentication Application

Full-stack JWT authentication web application developed with React (Vite), Node.js, Express, MongoDB, and Tailwind CSS. The project demonstrates secure password hashing, token-based session handling, role-based access control, and protected routes.

## Features

- User registration and login
- Password hashing using bcrypt
- JSON Web Token (JWT) generation and verification
- Persistent authentication state via localStorage
- Role-based authorization (`user` and `admin`)
- Protected frontend routes and private backend API endpoints
- User profile viewing and updating (name, email, password)
- Admin panel to view all users, modify roles, and delete accounts
- Server-side and client-side form validation
- API error handling with status codes and feedback messages
- Fully responsive interface built with Tailwind CSS

## Tech Stack

- **Frontend:** React 19, Vite, React Router v7, Axios, React Hot Toast, Tailwind CSS
- **Backend:** Node.js, Express.js, Mongoose, JSONWebToken, bcryptjs, express-validator, cors, dotenv
- **Database:** MongoDB (Local or MongoDB Atlas)

## Project Structure

```
.
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB database connection
│   ├── controllers/
│   │   ├── authController.js  # Registration, login, current user logic
│   │   └── userController.js  # Profile and admin user management
│   ├── middleware/
│   │   ├── authMiddleware.js  # Token verification & role checking
│   │   └── errorMiddleware.js # 404 & centralized error handler
│   ├── models/
│   │   └── User.js            # User Mongoose schema & bcrypt hooks
│   ├── routes/
│   │   ├── authRoutes.js      # /api/auth routes
│   │   └── userRoutes.js      # /api/users routes
│   ├── utils/
│   │   ├── generateToken.js   # JWT signing utility
│   │   └── seed.js            # Database seeder for demo accounts
│   ├── .env.example
│   ├── package.json
│   └── server.js              # Express app entry point
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── LoadingSpinner.jsx # Loading component
    │   │   ├── Navbar.jsx         # App navigation bar
    │   │   └── ProtectedRoute.jsx # Route authentication guard
    │   ├── context/
    │   │   └── AuthContext.jsx    # Authentication React context
    │   ├── pages/
    │   │   ├── AdminDashboard.jsx # Admin user management panel
    │   │   ├── Dashboard.jsx      # User dashboard
    │   │   ├── Login.jsx          # Sign in page
    │   │   ├── Profile.jsx        # Profile view and update page
    │   │   └── Register.jsx       # Sign up page
    │   ├── services/
    │   │   └── api.js             # Axios client with interceptors
    │   ├── App.jsx                # Main route definitions
    │   ├── index.css              # Tailwind and global styles
    │   └── main.jsx               # React DOM root
    ├── .env.example
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm
- MongoDB running locally or a MongoDB Atlas connection string

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` based on `.env.example`:

```env
PORT=5008
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/jwt_auth_db
JWT_SECRET=your_jwt_secret_key_change_in_production
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5174
```

Seed initial demo accounts (optional):

```bash
node utils/seed.js
```

Start the backend server:

```bash
npm run dev
```

The server will start at `http://localhost:5008`.

### 2. Frontend Setup

In a new terminal window:

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/` based on `.env.example`:

```env
VITE_API_URL=http://localhost:5008/api
```

Start the frontend development server:

```bash
npm run dev
```

Open `http://localhost:5174` in your browser.

## Test Credentials

If you seeded the database using `node utils/seed.js`, you can test with:

| Account | Email | Password | Role |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@example.com` | `Password123` | admin |
| **Standard User** | `user@example.com` | `Password123` | user |

You can also create new users using the registration page. Newly registered accounts receive the `user` role by default.

## API Endpoints

### Auth Routes (`/api/auth`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Authenticate user & get JWT |
| GET | `/api/auth/me` | Private | Get authenticated user info |

### User Routes (`/api/users`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| GET | `/api/users/profile` | Private | Get current user's profile |
| PUT | `/api/users/profile` | Private | Update user name, email, or password |
| GET | `/api/users` | Admin only | List all registered users |
| PUT | `/api/users/:id/role` | Admin only | Update user role (`user` or `admin`) |
| DELETE | `/api/users/:id` | Admin only | Delete user account |

## Deployment

### Backend (Render)

1. Push your repository to GitHub.
2. Create a new Web Service on [Render](https://render.com).
3. Connect your GitHub repository.
4. Set **Root Directory** to `backend`.
5. Set **Build Command** to `npm install`.
6. Set **Start Command** to `npm start`.
7. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `MONGO_URI`: Your MongoDB Atlas URI
   - `JWT_SECRET`: A secure random string
   - `CLIENT_URL`: Your deployed frontend URL

### Frontend (Vercel)

1. Create a new project on [Vercel](https://vercel.com).
2. Connect your GitHub repository.
3. Set **Root Directory** to `frontend`.
4. Framework Preset: `Vite`.
5. Under **Environment Variables**, add:
   - `VITE_API_URL`: `https://your-backend-app.onrender.com/api`
6. Deploy.
