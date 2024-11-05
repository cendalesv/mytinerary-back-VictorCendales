import {Schema,model} from "mongoose";

let collection = 'cities'
let schema = new Schema({
    name:{type:String,required:true},
    photo:{type:String,required:true},
    Country:{type:String,required:true},
    Continent:{type:String,required:true},
    Description:{type:String,required:true},
    Badge:{type:String,required:true},
    religion:{type:String,required:true},
    itinerary: {type:Schema.Types.ObjectId, ref:"itineraries", required:true},  
},{
    timestamps:true
})

let City = model(collection,schema)
export default City

