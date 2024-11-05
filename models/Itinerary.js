import {Schema,model} from "mongoose";

let collection = 'itineraries'
let schema = new Schema({
    publisherPhoto: { type: String, required: true },  // Foto de la persona que publicó el itinerario
    publisherName: { type: String, required: true },   // Nombre de la persona que publicó
    price: { type: Number, required: true, min: 1, max: 5 }, // Precio de 1 a 5
    duration: { type: Number, required: true }, // Duración en horas
    city: {type:Schema.Types.ObjectId, ref:"cities", required:true},      
    likes: { type: Number, default: 0 },               // Likes iniciando en 0
    hashtags: { type: [String], required: true, maxlength: 4 }, // Máximo 4 hashtags
    comments: [{                                       
        user: { type: String, required: true },        // Nombre del usuario que comentó
        text: { type: String, required: true },        // Texto del comentario
        date: { type: Date, default: Date.now }        // Fecha del comentario
    }]
},{
    timestamps:true
})

let Itinerary = model(collection,schema)
export default Itinerary