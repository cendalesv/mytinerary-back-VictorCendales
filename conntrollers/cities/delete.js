import City from "../../models/City.js";

let findOneAndDelete = async (req,res,next) =>{
    try {
        let deleteCity = await City.findOneAndDelete ({
            name: req.body.name
        })
        return res.status(200).json({
                    response: deleteCity
                }) 
    } catch (error) {
        next (error)
    }
}

let findByIdAndDelete = async (req,res,next) =>{
    try {
        let deleteCityId = await City.findByIdAndDelete 
        (req.params.id)
        return res.status(200).json({
                    response: deleteCityId
                }) 
    } catch (error) {
        next (error)
    }
}

export {findOneAndDelete, findByIdAndDelete}