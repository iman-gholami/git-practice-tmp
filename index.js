const express = require('express');

const app = express();


const PORT = 9300 ;


app.get('/home' , (req , res)=>{
    res.send('hello World')
})



app.listen(PORT , ()=>{
    console.log(`server listening on ${PORT}`);
});

