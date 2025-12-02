import express from 'express'

const app = express();
const port = process.env.port || 3000

app.get('/', (req,res)=>{
    res.send("Server is Ready")
})

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id:1,
            title:'joke 1',
            content: 'this is a joke 1'
        },
        {
            id:2,
            title:'joke 2',
            content: 'this is a joke 2'
        },
        {
            id:3,
            title:'joke 3',
            content: 'this is a joke 3'
        },
        {
            id:4,
            title:'joke 4',
            content: 'this is a joke 4'
        },
        {
            id:5,
            title:'joke 5',
            content: 'this is a joke 5'
        },
    ];
    res.send(jokes);
})

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
})