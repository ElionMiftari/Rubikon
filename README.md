# Rubikon - Modern Rubik's Cube Full-Stack Website

Rubikon is a production-ready full-stack website focused on Rubik's Cubes with responsive design, shop/cart UX, educational content pages, and secure authentication.

## Tech Stack

- **Frontend:** React + TailwindCSS + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT-based authentication

## Features

- Modern responsive UI (mobile/tablet/desktop)
- Light/Dark theme toggle
- Hero animation on home page
- Rubik's cube types page with image, difficulty, and pricing
- Shop page with add-to-cart/remove-from-cart and live summary
- Informational pages: How They Are Made + About
- Working contact form with frontend + backend validation
- Sign Up / Sign In / Logout
- Protected dashboard route
- SEO basics (`description`, `keywords`, viewport tags)
- Error handling for API and forms

## Project Structure

```text
Rubikon/
├─ client/                 # React frontend
│  ├─ src/
│  │  ├─ components/
│  │  ├─ context/
│  │  ├─ data/
│  │  ├─ pages/
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ server/                 # Express backend
│  ├─ src/
│  │  ├─ config/
│  │  ├─ controllers/
│  │  ├─ middleware/
│  │  ├─ models/
│  │  ├─ routes/
│  │  └─ server.js
│  └─ .env.example
└─ package.json            # Root workspace scripts
```

## Database Schema

### `users`
- `username` (String, required)
- `email` (String, required, unique)
- `password` (String, required, hashed)
- `createdAt` / `updatedAt`

### `contactmessages`
- `name` (String, required)
- `email` (String, required)
- `message` (String, required, min length 10)
- `createdAt` / `updatedAt`

## Setup Instructions

### 1) Install dependencies

```bash
npm install
```

### 2) Environment variables

```bash
cp server/.env.example server/.env
```

Update `server/.env` values (especially `JWT_SECRET` and `MONGODB_URI`).

### 3) Run development servers

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Production Build

```bash
npm run build
npm run start
```

## API Endpoints

- `GET /api/health`
- `POST /api/auth/signup`
- `POST /api/auth/signin`
- `GET /api/auth/me` (Bearer token required)
- `POST /api/contact`

## Notes

- Cart is client-side for simplicity and speed.
- All major files include clear, maintainable structure and comments where core logic appears.
