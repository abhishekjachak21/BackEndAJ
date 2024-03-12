
// import 'dotenv/config'

require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT || 9050;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gyaan', (req, res) => {
    res.send('<h1>Body is lie,and Consciousness is the truth!</h1>')
  })


app.get('/youtube', (req, res) => {
  res.send('career, education platform')
})


app.get('/twitter', (req, res) => {
    res.send('i use it less')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


















// require('dotenv').config();
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 9025;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/gyaan', (req, res) => {
//   res.send('<h1>You are that!</h1>');
// });

// app.get('/youtube', (req, res) => {
//   res.send('career, education platform');
// });

// app.get('/twitter', (req, res) => {
//   res.send('i use it less');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
