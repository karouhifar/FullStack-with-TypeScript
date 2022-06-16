import express from "express";
import { Server } from "http";
import router from "./routers/reminders";
const app  = express();

app.use(express.json())
app.use('/reminders',router)

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(8000,() : void =>{
    console.log('server started');
});