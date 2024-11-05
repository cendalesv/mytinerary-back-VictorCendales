import { Router } from "express";
import {allCities, citiesById} from "../conntrollers/cities/read.js"
import create from "../conntrollers/cities/create.js";
import {update} from "../conntrollers/cities/update.js";
import {  findOneAndDelete, findByIdAndDelete } from "../conntrollers/cities/delete.js";

const routerCities = Router()

routerCities.get("/all",allCities)
routerCities.get('/id/:cityid',citiesById)
routerCities.put("/update",update)
routerCities.delete("/findOneAndDelete",findOneAndDelete)
routerCities.delete("/findByIdAndDelete/:id", findByIdAndDelete)

// create

routerCities.post("/create",create)



export default routerCities;