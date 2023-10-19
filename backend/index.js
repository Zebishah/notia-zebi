
const connectDB = require("./db");
const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors')
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://notia-frontend.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // If you need to allow credentials
    next();
});
app.use(cors(
    {
        origin: ["https://notia-frontend.vercel.app"],
        credentials: true
    }
))
app.use(express.json())
const port = 5000;
connectDB();
let host = process.env.REACT_APP_API_HOST
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
