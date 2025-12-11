import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {

            return res.json({ success: false, msg: "not authorized login again" })
        }
        const token_decode = jwt.verify(token, "mqt");
        if (token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, msg: "not authorized login again" })
        }
         next();

    }
    catch (error) {
        console.log(error);

    }
}

export default adminAuth