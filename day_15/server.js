import express from 'express';

const app= express();
const PORT = 3000;

app.use(express.json());

const users= [
    {id:1, 
        name: 'Utkarsh',
        age: 21,
    },
    {id:2,
        name: 'John',
        age: 25, 
    },
    {id:3,
        name: 'Alice',
        age: 30,  
    },
]

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res)=>{
    res.json(users);
});
