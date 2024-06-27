const { PrismaClient } = require('@prisma/client')

const express = require('express')
const app = express();
const PORT = 2024;
const prisma = new PrismaClient();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const usersRoute = require('./routes/users');
const mealsRoute = require('./routes/meals');
const historyRoute = require('./routes/history');
const waterRoute = require('./routes/water');

app.use('/users', usersRoute);
app.use('/meals', mealsRoute);
app.use('/history', historyRoute);
app.use('/water', waterRoute);

app,get('/', (req, res, next) => {
    res.send("Welcome to the NutriPal API");
    next();
})

app.listen(PORT, () => {
    console.log(`Running API on localhost ${PORT}`)
})
