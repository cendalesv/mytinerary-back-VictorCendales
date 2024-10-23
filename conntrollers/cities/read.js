import City from "../../models/City.js"

let allCities = async (req,res,next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let citiesById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let idQuery = req.params.id
        let all = await  City.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

export {allCities, citiesById}