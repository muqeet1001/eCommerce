// route for user login
import userModel from './../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
 


const createToken = (id) => {
    return jwt.sign({ id }, "muqeet");
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "need to regisnter this email id not yet registered" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, msg: "please enter valid email" })
        }
    }
    catch (e) {
        console.log(e);
    }
}

//route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //checking user already exists
        const exits = await userModel.findOne({ email });

        if (exits) {
            return res.json({ success: false, message: "please enter different email user already exitst" });
        }
        if (!validator.isEmail(email)) {
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
        res.json({ success: true, message: "register is done", jwt: token })

    }
    catch (err) {
        res.send(err);

    }
}

//route for admin login 

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,"mqt");
            res.json({success:true,token})
        }
        else{
            res.json({success:false,msg:"envalid credientials"})
        }
    }
    catch (error) {
          res.json({msg:error.message})
    }
}

export { loginUser, registerUser, adminLogin }