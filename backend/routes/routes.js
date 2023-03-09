const express = require("express")
const router = express.Router()
module.exports = router

const Model = require("../models/model")


// Post
router.post('/post', async (req,res)=>{
    console.log("POSTING")
    console.log(req.query)
    const data = new Model({
        catID: req.query.catID,
    })

    try{
        const dataToSave = await data.save()
        res.status(200).send(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error})        

    }
})


router.get("/",(req,res)=>{
    res.send("Working API")
})


module.exports = router