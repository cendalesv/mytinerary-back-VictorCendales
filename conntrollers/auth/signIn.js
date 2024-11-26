import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
        { email: req.body.email }, 
        { onLine: true })

    return res.status(200).json({
      success: true,
      message: "Sing In",
    });
  } catch (error) {
    return next(error);
  }
};
