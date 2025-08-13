# Calendar Backend API

Backend REST API for Calendar application built with Node.js, Express and MongoDB.

## Setup

1. Clone this repository
2. Install dependencies
```bash
npm install
```
3. Create `.env` file in root directory with:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
4. Run the development server:
```bash
npm run dev
```

## API Endpoints

### Auth Routes
- `POST /api/auth/new` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/renew` - Renew authentication token

### Events Routes
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in requests using the `x-token` header.

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
-