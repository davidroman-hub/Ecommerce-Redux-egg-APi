

const SubCategory = require('../models/subCategory');
const slugify = require('slugify');


exports.createSubCategory = async (req,res) => {
    try {
        const {name} = req.body
        const category = await new SubCategory({name:name,slug: slugify(name).toLowerCase()}).save();
        res.json(category)
    } catch (error) {
        console.log(error)
        res.status(400).send('Create category failed')
    }
}

exports.readSubCategory = async (req,res) => {
    let subCategory = await SubCategory.findOne({slug: req.params.slug}).exec();
    res.json(subCategory);
}

exports.listSubCategories = async (req,res) => {
                                                    // from the last that i created
    const listAllCategories = await SubCategory.find({}).sort({createdAt: -1}).exec()
    res.json( listAllCategories )
}

exports.updateSubCategory = async (req,res) => {
    const { name } = req.body;
    try {
        const updated = await SubCategory.findOneAndUpdate(
            
            {slug:req.params.slug}, 
            {name:name, slug: slugify(name)},
            {new:true}
            );
            res.json(updated)
    } catch (error) {
        console.log(error)
        res.status(400).send(' Sub Category updated failed')
    }
}

exports.removeSubCategory = async (req,res) => {
    try {
        const deleted = await SubCategory.findOneAndDelete({slug: req.params.slug});
        res.json(deleted)
    } catch (error) {
        console.log(error)
        res.status(400).send('Sub Category delete failed')
    }
}

