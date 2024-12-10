const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to get all items
router.get('/', itemController.getAllItems);

// Route to display the form to add a new item
router.get('/new-item', itemController.addItemForm);

// Route to create a new item
router.post('/create-item', itemController.addItem);

// Route to display the form to edit an item
router.get('/:id/edit', itemController.editItemForm);

// Route to update an item's details
router.put('/:id', itemController.updateItem);

// Route to delete an item
router.delete('/:id', itemController.deleteItem);

// Route to view a specific item by ID
router.get('/:id', itemController.viewItem);

module.exports = router;
