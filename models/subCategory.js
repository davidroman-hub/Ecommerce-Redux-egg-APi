
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const subCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is Required',
        minlength:[3, 'Too short'],
        maxlength:[32,'Too long']
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true,
        index:true
        },
    parentCategory:{ type: ObjectId, ref: "Category", required:true }    
    },
        {timestamps:true}
    )

    module.exports = mongoose.model('SubCategory', subCategorySchema);