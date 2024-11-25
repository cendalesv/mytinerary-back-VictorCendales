import { Router } from "express";
import {allUsers, userById} from "../conntrollers/users/read.js"
import create from "../conntrollers/users/create.js";
import {update} from "../conntrollers/users/update.js";
import {  findOneAndDelete, findByIdAndDelete } from "../conntrollers/users/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreated from "../schemas/users/create.js";

const routerUsers = Router()

routerUsers.get("/all",allUsers)
routerUsers.get('/id/:id',userById)
routerUsers.put("/update",update)
routerUsers.delete("/findOneAndDelete",findOneAndDelete)
routerUsers.delete("/findByIdAndDelete/:id", findByIdAndDelete)

// create

routerUsers.post("/create",validator(schemaUsersCreated),create)


export default routerUsers