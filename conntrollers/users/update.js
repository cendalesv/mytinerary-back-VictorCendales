import User from "../../models/User.js";

const update = async (req,res,next) =>{
    try {
        let user = req.body
        let upd = await User.updateOne (
                {_id: user._id},  //condiciones de busqueda
                {photo: user.photo}, //modificaciones
                {country: user.country}
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