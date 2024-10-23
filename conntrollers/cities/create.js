import City from "../../models/City.js";

let create = async (req,res,next) => {
    try {
        let cities = req.body
        let all = await City.create(cities)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default create