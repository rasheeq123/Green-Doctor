
const express = require('express'); 
const userRouter=require('./routers/userRouter');


const cors = require('cors');


const app=express();
const port= 5000;


app.use(express.json());  

app.use(cors({
    origin:['http://localhost:3000']
}));

app.use('/user', userRouter);



app.get('/', (req , res)=>{
    res.send('response from express')
});

app.get('/home', (req , res)=>{
    res.send('Welcome to home')
});
app.get('/add', (req , res)=>{
    res.send('Wanna Add something')
});

app.get('/getall', (req , res)=>{
    res.send('response from getall')
});

app.get('/getbyslot', (req , res)=>{
    res.send('response from getbyslot')
});

app.get('/getbyid', (req , res)=>{
    res.send('response from getbyid')
});

app.get('/update', (req , res)=>{
    res.send('response from update')
});

app.get('/delete', (req , res)=>{
    res.send('response from delete')
});

app.listen(port, ()=>{
    console.log('server started')
});
