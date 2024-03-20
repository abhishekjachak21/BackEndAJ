const express = require('express');
const mysql = require('mysql');
const path = require('path'); // Import the path module

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'abhi21',
  password: '2121',
  database: 'dance'
});

// Route handler for the root URL
app.get('/', (req, res) => {
  // Serve the HTML file containing the form
  res.sendFile(path.join(__dirname, '1.html'));
});

// Route handler for handling POST requests to "/insert" endpoint
app.post('/insert', (req, res) => {
  const { name, age } = req.body;
  pool.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age], (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'An error occurred while inserting data.' });
      return;
    }
    console.log('Data inserted successfully:', results);
    res.status(200).json({ message: 'Data inserted successfully.' });
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


















// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// app.use(express.json());

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'abhi21',
//   password: '2121',
//   database: 'dance'
// });

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


// app.post('/insert', (req, res) => {
//   const { name, age } = req.body;
//   pool.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age], (error, results) => {
//     if (error) {
//       console.error('Error inserting data:', error);
//       res.status(500).json({ message: 'An error occurred while inserting data.' });
//       return;
//     }
//     console.log('Data inserted successfully:', results);
//     res.status(200).json({ message: 'Data inserted successfully.' });
//   });
// });

// // const PORT = process.env.PORT || 3000;
// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });







// const mysql = require('mysql');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'abhi21',
//     password: '2121',
//     database: 'dance'
//   });


//   const dataToInsert = { name: 'Abhishek', age: 21 };

// pool.query('INSERT INTO users SET ?', dataToInsert, (error, results) => {
//   if (error) {
//     console.error('Error inserting data:', error);
//     return;
//   }
//   console.log('Data inserted successfully:', results);
// });

  