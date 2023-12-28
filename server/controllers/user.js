import User from "./../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
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

const postApiv1Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).json({
        success: false,
        message: "Enter All Feild",
      });
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE_KEY, {
        expiresIn: "3h",
      });
      const refreshToken = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRETE_KEY,
        {
          expiresIn: "5m"
        }
      );

      user.refreshToken = refreshToken;
      await user.save();
      user.password = undefined;
      // send token to uset cookei
      // cookie section 
      const option = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie('token', token, option);
      res.cookie('refreshToken', refreshToken, { httpOnly: true });
      res.status(200).json({
        success: true,
        token,
        refreshToken,
        user: user
    });
    }
    else{
      res.status(404).json({ message: "User not found" })
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
export { postApiv1Signup, postApiv1Login };
