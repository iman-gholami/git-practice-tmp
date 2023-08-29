const express = require('express');

const app = express();


const PORT = 9300 ;


app.get('/' , (req , res)=>{
    res.send('hello World')
})


app.('/home', (req, res)=>{
    res,send('Wellcome To the Home Page Here')
})


app.listen(PORT , ()=>{
    console.log(`server listening on ${PORT}`);
});

