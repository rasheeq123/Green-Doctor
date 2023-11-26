const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>{
    // get the token from the request header 
    const token = req.header('x-auth-token');

// Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo) => {
      if(err){
        console.log(err);
        res.status(401).json({msg: 'Token is not valid'});
      }
      else{
        req.user = userInfo;
        next();
      }
    });
}catch(err){
    console.error(err);
    res.status(500).json({msg: 'Server Error'});
}
}

module.exports = verifyToken;