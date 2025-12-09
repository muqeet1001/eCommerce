// route for user login
import userModel from './../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, "muqeet");
}
const loginUser = async (req, res) => {

}

//route for user register
const registerUser = async (req, res) => {
    try{
         const { name, email, password } = req.body;

    //checking user already exists
    const exits = await userModel.findOne({ email });

    if (exits) {
        return res.json({ success: false, message: "please enter a valid email" });
    }
    if (password.length < 8) {
        return res.json({ success: false, message: "please enter a strong password" });
    }

    //handle user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    })
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, message: "register is done",jwt: token })

    }
    catch (err){
        res.send(err);
        
    }
}

//route for admin login 

const adminLogin = async (req, rea) => {


}


export { loginUser, registerUser, adminLogin }