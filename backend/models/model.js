const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    _id:{
        required: true,
        type: String
    },
    visitorCount:{
        type: Number
    }
},{timestamps: true,collection:'cats'})

module.exports = mongoose.model('Data', dataSchema)