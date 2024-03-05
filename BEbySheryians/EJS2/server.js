const express = require('express');
const app = express(); 

//myMade
//.set(), .use(), .get(), .listen()

app.set('view engine', 'ejs');

app.set('views', '/home/abhishek/Desktop/HelloCoder/BKend/EJS2/views');

app.use(express.static('/home/abhishek/Desktop/HelloCoder/BKend/EJS2/public'))

app.get('/',function(req,res){
    res.render('index',{pageTitle:"WOW Pvt. Ltd", usr:"abhi",age:24});
})

app.get('/profile',function(req,res){
    res.render('profile',{username:"abhi",age:23});
})

app.listen(3009);    //here is diff in gpt




/*
//===============================================================
//byChatgpt

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
    res.render('profile', { username: 'Abhisshek Jachak', age: 21 });
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/