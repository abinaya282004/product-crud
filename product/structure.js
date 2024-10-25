const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema(
    
    
    {
        image:{
            type:String,
            required:false
        },
        image1:{
            type:String,
            required:false
        },
        image2:{
            type:String,
            required:false
        },
        image3:{
            type:String,
            required:false
        },
        image4:{
            type:String,
            required:false
        },
        category:{
            type:String,
            required:true
        },
        brand:{
            type:String,
            required:false
        },
        name:{
            type:String,
            required:true   
        },
        description:{
            type:String,
            required:false
        },
        rating:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        stock_quantity:{
            type:Number,
            required:true,
            default:0
        },
        delivery:{
            type:String,
            required:true
        },
        discount:{
            type:String,
            required:false
        },
        color:{
            type:[String],
            required:true
        },
        RAM:{
            type:[String],
            required:true
        },
        highlights:{
            type:[String],
            required:false
        },
        specification:{
            type:[String],
            required:false
        },
        reviews:{
            type:String,
            required:false
        }
    },

    {
        timestamps:true,
    }
);

const Product =mongoose.model("Product",ProductSchema)

module.exports=Product;

