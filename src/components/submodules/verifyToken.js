import jwt from 'jsonwebtoken';
import 'dotenv/config';

const verifyToken = (req, res, next)=> {
  let token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, process.env.SECRET, (err, decoded)=> {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    next();
  });
}

export default verifyToken;