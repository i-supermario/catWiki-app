import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    _id:{
        required: true,
        type: String
    },
    visitorCount:{
        type: Number
    }
},{timestamps: true,collection:'cats'})

const CatModel = mongoose.model('Data', dataSchema)
export default CatModel
