import { Router } from "express";
import {allCities, citiesById} from "../conntrollers/cities/read.js"
import create from "../conntrollers/cities/create.js";

const routerCities = Router()

routerCities.get("/all",allCities)
routerCities.get('/id/:id',citiesById)

// create

routerCities.post("/create",create)



export default routerCities;