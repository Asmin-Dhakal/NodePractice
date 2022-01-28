const express = require("express");
const app = express();



app.get('/', (req, res)=>{
    res.send('This is default page.')
})

app.get('/homepage', (req,res)=>{
    res.send('Welcome to home page of our sever')

})
app.listen( 3000 , ()=>{
    console.log('server started at port 3000')
} )