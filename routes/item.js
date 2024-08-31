const express = require('express');
const { createItem, getItems, deleteItem } = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createItem);
router.get('/', getItems);
router.delete('/:id', authMiddleware, deleteItem);

module.exports = router;
