import User from "./../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const postApiv1Signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!(userName && email && password)) {
      res.status(400).json({
        success: false,
        message: "All Fields are Compulsory",
      });
    }
   
    // password enc
    const enEncPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName,
      email,
      password: enEncPassword,
    });
    // generate token for user and send it
    const token = jwt.sign(
      { id: user._id, email },
      process.env.JWT_SECRETE_KEY,
      {
        expiresIn: "3h",
      }
    );
    user.token = token;
    user.password = undefined;

    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

const postApiv1Login = () => {};
export { postApiv1Signup, postApiv1Login };
