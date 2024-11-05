import City from "../../models/City.js"
import mongoose from "mongoose";

let allCities = async (req,res,next) => {
    try {
        //filtros
        let {name,role} = req.query
        console.log(name);
        console.log(role);
        let query = {}
        
        if (name) {
            query.name = {$regex: "^" +name , $options: "i"}
        }
        
        let all = await City.find(query)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let citiesById = async (req, res, next) => {
    try {
        console.log(req.params);
        
        let cityId = req.params.cityid;

        // Verifica que idQuery sea un ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(cityId)) {
            return res.status(400).json({
                success: false,
                message: "ID no es válido"
            });
        }

        let all = await City.findById(cityId);
        
        if (!all) {
            return res.status(404).json({
                success: false,
                message: "Ciudad no encontrada"
            });
        }

        return res.status(200).json({
            success: true,
            response: all
        });
    } catch (error) {
        next(error);
    }
};

export { allCities, citiesById }