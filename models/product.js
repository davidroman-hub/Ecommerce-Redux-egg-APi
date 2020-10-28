
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({

        title:{
            type: String,
            trim:true,
            required:true,
            maxlength:32,
            text:true
        },
        slug:{
            type: String,
            unique:true,
            lowercase:true,
            index:true
        },
        description:{
            type: String,
            required:true,
            maxlength:200,
            text:true
        },
        price:{
            type: Number,
            required:true,
            trim:true,
            maxlength:1000
        },
        category:{
            type:ObjectId,
            ref:"Category",
        },
        subcategories: [{
            type:ObjectId,
            ref:'SubCategory'
        }],
        quantity:Number,
        sold:{
            type:Number,
            default:0
        },
        images:{
            type:Array
        },
        shipping:{
            type:String,
            enum:['Yes','No']
        },
        color:{
            type:String,
            enum:['Black', 'Brown','Silver', 'White'],
        },
        brand:{
            type:String,
            enum:['Apple', 'Samsung','Microsoft', 'Lenovo','Asus'], //We can use this as a category but we need to restart everything
        },
        // ratings:[
        //     {
        //         star:Number,
        //         postedBy:{type: ObjectId, ref:'User'}
        //     }
        // ]
    },
    {timestamps:true}
)

module.exports = mongoose.model('Product', productSchema);