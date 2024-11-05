import Itinerary from "../../models/Itinerary.js"

let allItineraries = async (req,res,next) => {
    try {
        //filtros
        let {publisherName,role} = req.query
        console.log(publisherName);
        console.log(role);
        let query = {}
        
        if (publisherName) {
            query.publisherName = {$regex: "^" +publisherName , $options: "i"}
        }
        
        let all = await Itinerary.find(query)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let itinerariesById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let idQuery = req.params.id
        let all = await  Itinerary.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

export {allItineraries, itinerariesById}