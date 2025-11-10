# MERN Authentication Project

A full-stack authentication system built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User registration and login
- Email verification
- Password reset functionality
- JWT authentication
- Protected routes
- Modern UI with Tailwind CSS

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@example.com
   EMAIL_PASSWORD=your_email_password
   CLIENT_URL=http://localhost:5173
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the client directory with:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- Nodemailer
- bcrypt

## Security Notes

⚠️ **Important**: Never commit your `.env` files to version control. They contain sensitive information like:
- Database credentials
- JWT secrets
- Email passwords
- API keys

## Contributing

Feel free to fork this project and submit pull requests.

## License

MIT License
