import express from 'express'
import {userLogin,adminLogin,userRegister} from '../Controllers/UserControllers.js';

const userRoute = express.Router();

userRoute.post('/login',userLogin);
userRoute.post('/register',userRegister);
userRoute.post('/admin',adminLogin);

export default userRoute;
