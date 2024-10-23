const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        success: false, 
        //Manejo de error 404
        message: `La petición cn el metodo ${req.method} con la ruta ${req.url} no fue encontrada _ Not Found - `
    })
}
export default not_found_handler