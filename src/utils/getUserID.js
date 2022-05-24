import jwt from "jsonwebtoken"


const getUserID = (request) => {
    const header = request.request.headers.authorization

    if(!header) {
        throw new Error ('Authentication required');
    }

    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, 'secretKey' ) 
    return decoded.userId
}

export {getUserID as default}