
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');

const slugify = require('slugify');


exports.createCategory = async (req,res) => {
    try {
        const {name} = req.body
        const category = await new Category({name:name,slug: slugify(name).toLowerCase()}).save();
        res.json(category)
    } catch (error) {
        console.log(error)
        res.status(400).send('Create category failed')
    }
}

exports.readCategory = async (req,res) => {
    let category = await Category.findOne({slug: req.params.slug}).exec();
    res.json(category);
}

exports.listCategories = async (req,res) => {
                                                    // from the last that i created
    const listAllCategories = await Category.find({}).sort({createdAt: -1}).exec()
    res.json( listAllCategories )
}

exports.updateCategory = async (req,res) => {
    const { name } = req.body;
    try {
        const updated = await Category.findOneAndUpdate(
            
            {slug:req.params.slug}, 
            {name:name, slug: slugify(name)},
            {new:true}
            );
            res.json(updated)
    } catch (error) {
        console.log(error)
        res.status(400).send('Category updated failed')
    }
}

exports.removeCategory = async (req,res) => {
    try {
        const deleted = await Category.findOneAndDelete({slug: req.params.slug});
        res.json(deleted)
    } catch (error) {
        console.log(error)
        res.status(400).send('Category deleted failed')
    }
}


// this method is for show subCategory when you chose the Parent category
// so if we choose asus we want to see the subs categories an with this add the product to this category

exports.getSubs = async (req,res) => {
        SubCategory.find({parent: req.params._id}).exec((err, subs) =>{
            if(err) console.log(err);
            res.json(subs)
        })
}

