const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(express.static('./static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var a=[];


app.get('/', (req, res)=>{
    res.send('This is default page.')
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname + '/static/html/login.html'));
})


app.post('/user',(req,res)=>{
    
    var userdetails = req.body;
    console.log(userdetails)
    a.push(userdetails)
});


app.listen( 3000 , ()=>{
    console.log('server started at port 3000')
} )


app.get('/registeredUser',(req,res)=>{
    res.send(a)
    
})