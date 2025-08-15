import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken'


//genrate token 
const genrateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SCREAT_KEY);
}


//login
const userLogin = async(req,res)=>{

    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            res.json({success:false,message:"User Don't exists"});
        }

        const verify = await bcrypt.compare(password,user.password);

        if(verify){
            const token = genrateToken(user._id);
            res.json({success:true,token});
        }else{
            res.json({success:false,message:"Invalid credential!!"});
        }

    } catch (error) {
        res.json({success:false,message:error.message});
    }

}

//register
const userRegister = async(req,res)=>{
    try {

        const {name,email,password} = req.body;

        //checking user already is there
        const Exist = await userModel.findOne({email});

        if(Exist){
            return res.json({success:false,message:"User Already Exist"});
        }

        
        //checking coorect email
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter an Valid email"});
        }

        //checking strong password
        if(password.length<0){
            return res.json({success:false,message:"Please enter an Strong Password"});
        }

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hassPassword = await bcrypt.hash(password,salt);

        //saveing the users in db
        const newUser = new userModel({
            name,
            email,
            password:hassPassword
        })


        const user = await newUser.save();

        //genrating token
        const token = genrateToken(user._id);

        res.json({success:true,token});

    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

//logout
const adminLogin = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SCREAT_KEY);
            res.json({success:true,token});
        }else{
            res.json({success:false,message:"Invalid credential!!"});
        }
    } catch (error) {
        res.json({success:false,message:error.message});
    }

}

export {userLogin,adminLogin,userRegister};