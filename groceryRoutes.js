const express = require('express');
const router = express.Router();
const {
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
} = require('./groceryService');

// GET all grocery items
router.get('/', (req, res) => {
  res.json(getAllItems());
});

// POST add new item
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Item name is required' });
  const item = addItem(name);
  res.status(201).json(item);
});

// PUT update an item (mark as bought, etc.)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updated = updateItem(parseInt(id), req.body);
  if (!updated) return res.status(404).json({ error: 'Item not found' });
  res.json(updated);
});

// DELETE remove an item
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = deleteItem(parseInt(id));
  if (!deleted) return res.status(404).json({ error: 'Item not found' });
  res.json({ success: true });
});

module.exports = router;
