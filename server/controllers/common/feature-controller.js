const Features = require('../../models/features')

const addFeatureImage = async(req,res)=>{
    try{
        const {image} = req.body;

        const featuresImage = new Features({
            image
        })
        await featuresImage.save();

        res.status(201).json({
            success:true,
            data:featuresImage
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Some error occured!",
        });
    }
}

const getFeatureImage = async(req,res)=>{
    try{
        const images = await Feature.find({})
        res.status(200).json({
            success:true,
            data:images
        });
    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Some error occured!",
        });
    }
}


module.exports = {addFeatureImage,getFeatureImage}