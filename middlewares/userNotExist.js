import User from "../models/User.js";

export default async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      req.user = {
        email: user.email,
        password: user.password,
        photo: user.photo,
      };
      return next();
    }
    return res.status(400).json({
      success: false,
      message: "User does not exist",
    });
  } catch (error) {
    next(error);
  }
};
