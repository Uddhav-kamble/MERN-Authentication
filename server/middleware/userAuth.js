import jwt from "jsonwebtoken";


const userAuth = async (req, res, next) => {
    const {token} = req.cookies;
    const authHeader = req.headers.authorization;

    // Check token from cookies or Authorization header
    const jwtToken = token || (authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null);

    if(!jwtToken){
        return res.json({success: false, message:'Not Authorized. Login Again'})
    }

    try{

        const tokenDecode = jwt.verify(jwtToken, process.env.JWT_SECRET);

        if(tokenDecode.id){
            if (!req.body) req.body = {};
            req.body.userId = tokenDecode.id
        }
        else{
            return res.json({success: false, message:'Not Authorized. Login Again'});
        }

        next();

    }
    catch(error){
        res.json({success: false, message: error.message})
    }

}

export default userAuth;