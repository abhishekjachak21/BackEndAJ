import express from 'express';
// import cors from 'cors';

const app = express();

// app.use(cors());

const port = process.env.PORT || 3002;

app.get('/',(req,res)=>{
    res.send("server is ready");
})

app.get('/yes',(req,res)=>{
    res.send("<h1>hi bruh<h1>");
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"1joke",
            content:"this is one joke"
        },
        {
            id:2,
            title:"2joke",
            content:"this is 2nd joke"
        },
        {
            id:3,
            title:"3joke",
            content:"this is 3rd joke"
        },
        {
            id:4,
            title:"4joke",
            content:"this is 4th joke"
        }
    ];
    res.send(jokes);
})

app.listen(port,() => {
    `server listening on port ${port}`}
    );