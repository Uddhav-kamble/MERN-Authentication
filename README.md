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

## Deployment

### Deploying to Vercel

This project includes a `vercel.json` configuration file for easy deployment.

#### Method 1: Deploy Both Frontend and Backend Together

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Import Project"
4. Import your GitHub repository
5. Add the following environment variables in Vercel:
   
   **Root Settings:**
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - Your JWT secret key
   - `EMAIL_USER` - Your email address
   - `EMAIL_PASSWORD` - Your email app password
   - `CLIENT_URL` - Your Vercel frontend URL (will be available after first deploy)
   - `VITE_API_URL` - Your Vercel backend URL

6. Click "Deploy"

#### Method 2: Deploy Frontend and Backend Separately (Recommended)

**Deploy Backend:**
1. Go to Vercel Dashboard → Import Project
2. Select your repository
3. Set "Root Directory" to `server`
4. Add environment variables (MONGODB_URI, JWT_SECRET, EMAIL_USER, EMAIL_PASSWORD, CLIENT_URL)
5. Deploy

**Deploy Frontend:**
1. Create a new project in Vercel
2. Select the same repository
3. Set "Root Directory" to `client`
4. Add environment variable: `VITE_API_URL` (your backend URL from step 1)
5. Deploy

### Important Vercel Configuration Notes

- The `vercel.json` file is configured for both frontend and backend
- Make sure to set `CLIENT_URL` in server environment variables to your deployed frontend URL
- Make sure to set `VITE_API_URL` in client environment variables to your deployed backend URL
- After first deployment, update CORS settings if needed

## Contributing

Feel free to fork this project and submit pull requests.

## License

MIT License
