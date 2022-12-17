import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cors from 'cors'
const app = express();

// const userRouter = require('./routes/userRoutes');
import userRoutes from './routes/userRoutes.js';


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//Load Routes
app.use('/api/user',userRoutes);


app.listen(port, ()=>{
    console.log(`Server is Running at http://localhost:${port}`);
})
