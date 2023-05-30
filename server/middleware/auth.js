import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 100;
        let decodedData;

        if(token && isCustomAuth) {
            // decodedData = jwt.decode(token);
            
            
            console.log(req.userId);
        }else {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
            console.log(req.userId);
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;