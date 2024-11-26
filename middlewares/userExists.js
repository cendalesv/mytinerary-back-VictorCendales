import User from "../models/User.js";

export default async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        succes: false,
        message: "User already exists in our system",
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
