import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import legalRouter from './routes/legalRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// CORS Configuration
const corsOptions = {
  origin: [
    'https://www.keproduct.com', // Production frontend
    'https://keproduct.com', // In case someone visits without www
    process.env.NODE_ENV === 'development' && 'http://localhost:3000' // Development
  ].filter(Boolean),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true, // Enable if using cookies/sessions
  optionsSuccessStatus: 200 // For legacy browser support
}

// Middlewares
app.use(cors(corsOptions))
app.use(express.json())
// Add this RIGHT AFTER your CORS middleware
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://www.keproduct.com');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

// Handle preflight requests
app.options('*', cors(corsOptions))

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
app.use('/api/legal', legalRouter)

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    message: 'KeProduct API is working',
    environment: process.env.NODE_ENV || 'development'
  })
})

// Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`))

// Configure CORS properly
app.use(cors({
  origin: 'https://www.keproduct.com', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // If using cookies/auth
}));

// Handle preflight requests
app.options('*', cors());

// Your routes
app.get('/api/cart/get', (req, res) => { /* ... */ });
app.post('/api/product/list', (req, res) => { /* ... */ });

app.listen(process.env.PORT || 3000);