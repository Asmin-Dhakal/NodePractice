const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('./static'));






app.get('/', (req, res)=>{
    res.send('This is default page.')
})

app.get('/homepage', (req,res)=>{
    res.sendFile(path.join(__dirname + '/static/html/homepage.html'));

})
app.listen( 3000 , ()=>{
    console.log('server started at port 3000')
} )