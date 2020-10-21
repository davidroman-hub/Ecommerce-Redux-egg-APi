
const Category = require('../models/category');
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
    //
}

exports.listCategories = async (req,res) => {
    //
}

exports.updateCategory = async (req,res) => {
    //
}

exports.removeCategory = async (req,res) => {
    //
}

