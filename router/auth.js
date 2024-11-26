import { Router } from "express";
import singIn from "../conntrollers/auth/signIn.js";
import userNotExist from "../middlewares/userNotExist.js";

const routerAuth = Router()

routerAuth.post('/signin', userNotExist, singIn)

export default routerAuth