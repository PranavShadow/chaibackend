import express from 'express'

const app = express();

const port = process.env.port || 3000

app.get('/', (req,res)=>{
    res.send("Server is Ready")
})

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
})