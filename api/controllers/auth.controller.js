import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req,res,next)=>{
  const {username, email, password} = req.body;

  if(!username || !password || username===''|| password==='' || email==='')
    next(errorHandler(400, "All fields are required!"))

  const hashPassword= bcryptjs.hashSync(password, 10);

  const newUser= new User({
    username: username,
    email:email,
    password:hashPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful')
  } catch (error) {
    next(error);
  }
}