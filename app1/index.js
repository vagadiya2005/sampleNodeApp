const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.json());

app.get('/api/get1',(req,res)=>{

    res.send('get api called from app1');
});

app.get('/api/users', async (req, res) => {
    try {
      // transfer request endpoint /api/get2  in conatainer app2.  
      const response = await axios.get('http://app2:3000/api/get2');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });


app.listen(port,()=>{

    console.log(`app running on port ${port}`);
    
})