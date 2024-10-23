const bad_request = (error,req,res,next) =>{
    if (error.status === 400) {
        return res.status(400).json({
            //Manejo de error 400
            success: false,
            response: error.message,
            message: "The parameter was not found or is invalid. - Bad request 400"
        })
    }
    next(error)
}

export default bad_request
