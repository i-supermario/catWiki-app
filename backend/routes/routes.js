const express = require("express")
const router = express.Router()
module.exports = router
const Model = require("../models/model")
import fetch from 'node-fetch'
// const { Error } = require("mongoose")


// Upsert Endpoint to insert if it doesn't exist, and update the timestamp if it does
router.post('/post', async (req,res)=>{
    console.log("POSTING")

    try{
        let cat = await Model.findById(req.query.catID,{_id:0,visitorCount:1})

        let visitorCount = cat ? cat.visitorCount : 0

        const doc = await Model.updateOne(
                    { _id: req.query.catID },
                    { $set: { visitorCount: visitorCount + 1 } },
                    { upsert: true,new: true } // Make this update into an upsert
                  );
        res.status(200).json({message:'Successful Update/Insert', content: doc})
    }
    catch(error){
            res.status(400).json({message: error})
            console.log(error)

    }
})
// Endpoint to get 10 recent searches
router.get('/top',async (req,res)=>{
    console.log('GET TOP 10')
    try{
        // throw new Error("Error message");
        const data = await Model.find({},{_id:1}).sort({visitorCount:-1}).limit(10)
        console.log(data)
        let promises = data.map(value => fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${value._id}&api_key=live_G4JFwgGUOtl41S5SiTwEqbHEvPWQsv7CWktg8TtQnyC3PWZP8SxVgSCPJYffjY9p`)
        .then(res => res.json())
        // .then(res => console.log(res))
        )
        console.log("got promises",promises)

        Promise.all(promises)
        .then(results => {
            // console.log(results)
            // console.log(results.length)
            
            const cats = results.filter(result => result.length!=0).map(result => {
                console.log("result",result)
                return {
                    url: result[0].url,
                    breed: result[0].breeds
                }
        }
            )
            console.log("got cats",cats)
            res.status(200).send({result: cats})
        })
        .catch(error => res.status(400).send(error))
        
    }
    catch(error){
        res.status(400).send({message: error})
        console.log(error)
    }
    

})

//Endpoint to fetch cat details for a specific id
router.get('/cats/:id',(req,res)=>{
    console.log('GETTING CAT')
    
})

//Endpoint to get search results
router.get('/search/:query',(req,res)=>{
    let searchQ = req.params.query
    try{
        fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchQ}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.status(200).send(data)
        })
    }
    catch(error){
        res.status(400).json({message: error})

    }
})

router.get('/images/search',(req,res)=>{
    console.log('GETTING IMAGES')
    const limit = req.query.limit
    const id = req.query.id 
    try{
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${id}&api_key=live_G4JFwgGUOtl41S5SiTwEqbHEvPWQsv7CWktg8TtQnyC3PWZP8SxVgSCPJYffjY9p`)
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                res.status(200).send(data)
            })
    }
    catch(error){
        res.status(400).json({message: error})
    }
})



router.get("/",(req,res)=>{
    res.send("Working API")
})


module.exports = router