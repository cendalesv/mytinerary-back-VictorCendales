import Itinerary from "../../models/Itinerary.js";

let create = async (req,res,next) => {
    try {
        let itineraries = req.body
        let all = await Itinerary.create(itineraries)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default create
