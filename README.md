# Realtime Chat Application

This is a simple realtime chat application built with React on the frontend and Node.js with Express on the backend. It utilizes Socket.IO for real-time communication between clients and the server.

## Frontend

### Technologies Used
- React
- React Router
- Axios
- nanoid
- query-string
- react-emoji
- react-scroll-to-bottom
- socket.io-client
- Tailwind CSS

### Getting Started
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the `client` directory:
   ```bash
   cd client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Backend

### Technologies Used
- Node.js
- Express
- Socket.IO
- Mongoose
- CORS
- dotenv
- Morgan

### Getting Started
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory with the following content:
   ```
   DB_HOST=<your-mongodb-connection-string>
   PORT=3001
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3001`.

### Note
Make sure you have MongoDB installed and running, and replace `<your-mongodb-connection-string>` in the `.env` file with your actual MongoDB connection string.

Feel free to customize and expand the application as needed. Enjoy chatting in real-time!
