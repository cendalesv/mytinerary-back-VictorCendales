import User from "../../models/User.js";

let allUsers = async (req,res,next) => {
    try {
        // Filtros
        let {name,role} = req.query
        console.log(name);
        console.log(role);
        let query = {}
        if (name) {
            query.name = {$regex:'^'+name, $options: 'i'}
        }
        let all = await  User.find(query)

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let userById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

export {allUsers,userById} 