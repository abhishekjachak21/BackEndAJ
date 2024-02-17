const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', '/home/abhishek/Desktop/HelloCoder/BKend/EJS2/views');

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('/home/abhishek/Desktop/HelloCoder/BKend/EJS2/public'));  //lot of time spent here

// Route to render the index page
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'SharkTank India',usr:'AJ',age:21 });
});

// Route to render the profile page
app.get('/profile', (req, res) => {
    res.render('profile', { username: 'Abhishek Jachak', age: 21 });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
