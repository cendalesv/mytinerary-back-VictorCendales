import { Router } from "express";
import citiesRouter from "./cities.js"
import itinerariesRouter from "./itineraries.js"
import usersRouter from "./users.js"

const router = Router()

router.use("/cities",citiesRouter)
router.use("/itineraries",itinerariesRouter)
router.use("/users",usersRouter)


export default router