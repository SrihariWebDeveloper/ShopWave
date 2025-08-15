import jwt from 'jsonwebtoken'


const verifyUser = async(req,res,next)=>{
    const {token} = req.headers;

    if(!token){
        res.json({success:false,message:"Not Authorized!! please Login"});
    }
    try {

        const token_decode = jwt.verify(token,process.env.JWT_SCREAT_KEY);

        req.body.userId=token_decode.id;
        next();
        
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export default verifyUser;