const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHearder = req.headers.authorization;

    if(!authHearder || !authHearder.startsWith("Bearer ")) {
        return res.status(403).json({
            message: "No token provided"
        })
    }

    const token = authHearder.split(" ")[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch(error) {
        return res.status(403).json({
            message: "Invalid token"
        })
    }
};

// export default authmiddleware;
module.exports ={
    authMiddleware
};