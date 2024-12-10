const Item = require('../models/item');

// Get all items
exports.getAllItems = async (req, res) => {
    const items = await Item.find();
    res.render('index', { items });
};

// Display form to add a new item
exports.addItemForm = (req, res) => {
    res.render('add');
};

// Create a new item
exports.addItem = async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.redirect('/items');
};

// View a specific item by ID
exports.viewItem = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('view', { item });
};

// Display form to edit an item
exports.editItemForm = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('edit', { item });
};

// Update an item's details
exports.updateItem = async (req, res) => {
    await Item.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/items');
};

// Delete an item
exports.deleteItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/items');
};