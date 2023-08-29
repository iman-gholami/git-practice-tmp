const express = require('express');

const app = express();


const PORT = 9300 ;



app.listen(PORT , ()=>{
    console.log(`server listening on ${PORT}`);
});