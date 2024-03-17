import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.router.js';

const app=express();

dotenv.config();

mongoose
 .connect(process.env.MONGO)
 .then(()=>{
  console.log("Connected");
 })
 .catch((err)=>{
  console.log(err);
 })

 app.use(express.json())

app.listen(3000, ()=>{
  console.log('Server is running!!')
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)