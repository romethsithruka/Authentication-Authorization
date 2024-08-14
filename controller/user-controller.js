const User = require("../model/user");
const bcrypt = require("bcryptjs");
const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
    .status(400)
    .json({ message: " User already exists! Login Instead " });
  }
  const hashedPassword = bcrypt.hashSync (password) ;
  const user = new User({
    name,
    email,
    password :hashedPassword,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

const login = async (req,res,next) =>{
    const {email,password } =req.body;
    try{
        existingUser = await User.findOne ({email: email});
    }catch(err){
        return new Error(err);
    }
    if(!existingUser) {
        return res.status(400).json({message:"User not found.Signup Please"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if (!isPasswordCorrect){
        return res.status(400).json({message: 'Invalid Email / Password'})
    }
    return res.status(200).json({message:'Successfully Logged In'})
}

exports.signup = signup;
exports.login = login;