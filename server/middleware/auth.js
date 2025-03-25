import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log("token:-",token) 
    // console.log("token1:-",req.headers.authorization)
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {  // normal signin
      decodedData = jwt.verify(token, secret);
      // console.log("userId:-",decodedData)
      req.userId = decodedData?.id;
    } else {  // This is google signin
      decodedData = jwt.decode(token);
      console.log("googlen login:-",decodedData)

      req.userId = decodedData?.sub;
    }    
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
