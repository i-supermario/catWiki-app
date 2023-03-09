const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    catID:{
        required: true,
        type: String
    },
},{collection:'cats'})

module.exports = mongoose.model('Data', dataSchema)