require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;
const mongoDB = process.env.MONGODB_STRING;

// Connect to MongoDB
mongoose.connect(mongoDB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware and routes setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//routes here
const itemRoutes = require('./routes/itemRoutes');
app.use('/items', itemRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
