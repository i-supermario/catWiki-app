import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './routes/routes.js'


const database = mongoose.connection;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json());

app.post("",async (req,res)=>{
    res.send("Working site")
})
app.use("/app",router)
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server Started at 3001`)
})
    

export default app