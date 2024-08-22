const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/get2',(req,res)=>{

    res.send('get api called of app2');
});


app.listen(port,()=>{

    console.log(`app running on port ${port}`);
    
})