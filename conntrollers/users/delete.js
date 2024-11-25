import User from "../../models/User.js";

let findOneAndDelete = async (req,res,next) =>{
    try {
        let deleteUser = await User.findOneAndDelete ({
            name: req.body.name
        })
        return res.status(200).json({
                    response: deleteUser
                }) 
    } catch (error) {
        next (error)
    }
}

let findByIdAndDelete = async (req,res,next) =>{
    try {
        let deleteUserId = await User.findByIdAndDelete 
        (req.params.id)
        return res.status(200).json({
                    response: deleteUserId
                }) 
    } catch (error) {
        next (error)
    }
}

export {findOneAndDelete, findByIdAndDelete}