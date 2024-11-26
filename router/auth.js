import { Router } from "express";
import singIn from "../conntrollers/auth/signIn.js";
import userNotExist from "../middlewares/userNotExist.js";
import isValidPassword from "../middlewares/isVaildPassword.js";

const routerAuth = Router()

routerAuth.post('/signin', userNotExist, isValidPassword, singIn)

export default routerAuth