import Itinerary from "../../models/Itinerary.js";

let findOneAndDelete = async (req,res,next) =>{
    try {
        let deleteItinerary = await Itinerary.findOneAndDelete ({
            name: req.body.name
        })
        return res.status(200).json({
                    response: deleteItinerary
                }) 
    } catch (error) {
        next (error)
    }
}

let findByIdAndDelete = async (req,res,next) =>{
    try {
        let deleteItineraryId = await Itinerary.findByIdAndDelete 
        (req.params.id)
        return res.status(200).json({
                    response: deleteItineraryId
                }) 
    } catch (error) {
        next (error)
    }
}

export {findOneAndDelete, findByIdAndDelete}