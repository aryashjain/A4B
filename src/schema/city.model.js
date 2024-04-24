import mongoose, {Schema} from 'mongoose';

const citySchema = new Schema({
name:{
    type: String,
    required: true,
},
district:{
    type: String,
    required: true,
},
state: {
    type: String,
    required: true,
},
pincode: {
    type: String,
    required: true,
},
locality:{
    type:String,
    required: true,
    
}

},{
    timestamps:true
})



export const City = mongoose.model("City",citySchema);
