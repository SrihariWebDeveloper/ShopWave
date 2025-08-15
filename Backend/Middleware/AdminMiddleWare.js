import jwt from 'jsonwebtoken';

const adminAuth = async(req,res,next)=>{
    try {
        const {token} = req.headers;

        if(!token){
            return res.json({success:false,message:"Not Authorized!! Login Agin"});
        }

        const verfy_token = jwt.verify(token,process.env.JWT_SCREAT_KEY);

        if(verfy_token!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized!! Login Agin"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export default adminAuth;