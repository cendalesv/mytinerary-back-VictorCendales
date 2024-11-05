import City from "../../models/City.js";

const update = async (req,res,next) =>{
    try {
        let city = req.body
        let upd = await City.updateOne (
                {_id: city._id},  //condiciones de busqueda
                {Description: city.Description}, //modificaciones
                {photo: city.photo}
            )
            if (upd) {
                return res.status(200).json({
                    response: upd
                })
            } else {
                
            }             
    } catch (error) {
        next (error)
    }
}

export {update}