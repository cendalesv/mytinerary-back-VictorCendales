import { Router } from "express";
import {allItineraries, itinerariesById} from "../conntrollers/itineraries/read.js"
import create from "../conntrollers/itineraries/create.js";
import {update} from "../conntrollers/itineraries/update.js";
import {  findOneAndDelete, findByIdAndDelete } from "../conntrollers/itineraries/delate.js";


const routerItineraries = Router()

routerItineraries.get("/all",allItineraries)
routerItineraries.get('/id/:id',itinerariesById)
routerItineraries.put("/update",update)
routerItineraries.delete("/findOneAndDelete",findOneAndDelete)
routerItineraries.delete("/findByIdAndDelete/:id", findByIdAndDelete)

// create

routerItineraries.post("/create",create)



export default routerItineraries;