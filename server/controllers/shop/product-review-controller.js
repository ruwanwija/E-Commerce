const Order = require('../../models/Orders')
const Product = require('../../models/product')
const ProductReview = require('../../models/review')

const addProductReview = async(req,res)=>{
    try{
        const{
            productId,
            userId,
            userName,
            reviewMessage,
            reviewValue
        }=req.body;

    const order =  await Order.findOne({
        userId,
        "cartItems.productId":productId,
        orderStatus : 'confirmed'
    })

    if(!order){
        return res.status(404).json({
            success:false,
            message:'You need to purchase product to review it'
        })
    }

    const checkExsistingReview = await ProductReview.findOne(productId,userId)
    
    if(checkExsistingReview){
        return res.status(400).json({
            success:false,
            message:'You already reviewed this product!'
        })  
    }
    const newReview = new ProductReview({
        productId,
        userId,
        userName,
        reviewMessage,
        reviewValue
    })

    await newReview.save()

    const review = await ProductReview.find({productId});
    const totalReviewLength = reviews.length;
    const averageReview = review.reduce((sum,reviewsItem)=>sum+reviewsItem.reviewValue,0)/totalReviewLength;

    await Product.findByIdAndUpdate(productId,{averageReview});


    res.status(201).json({
        success:true,
        data:newReview
    })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:'error'
        })
    }
}


const getProductReviews = async(req,res)=>{
    try{
        const {productId} = req.params;

        const review = await ProductReview.find({productId});

        res.status(201).json({
            success:true,
            data:review,
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:'error'
        })
    }
}

module.exports = {addProductReview,getProductReviews}