import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import APIRoutes from './src/Routes/index.js';
import path from 'path';
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const PORT = process.env.PORT || 4000;

// Initialize Express app
const app = express();

// Middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', APIRoutes);

// Error handling middleware for other errors
app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.json({
        error: err.message,
    });
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// SSR Middleware setup (example, adjust as per your frontend framework)
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/user/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

app.get('/employee/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'employee.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`,`link to server is http://localhost:${PORT}/`);
});
