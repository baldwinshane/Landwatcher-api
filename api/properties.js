const express = require('express');
const router = express.Router();

// Sample in-memory data (replace with actual database queries)
const properties = [
  { id: 1, address: '123 Main St', city: 'Anytown', price: 250000 },
  { id: 2, address: '456 Oak Ave', city: 'Othertown', price: 350000 }
];

// GET all properties
router.get('/', (req, res) => {
  res.json(properties);
});

// GET property by ID
router.get('/:id', (req, res) => {
  const property = properties.find(p => p.id === parseInt(req.params.id));
  if (!property) {
    return res.status(404).json({ error: 'Property not found' });
  }
  res.json(property);
});

// POST new property
router.post('/', (req, res) => {
  const { address, city, price } = req.body;
  if (!address || !city || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newProperty = {
    id: properties.length + 1,
    address,
    city,
    price
  };
  properties.push(newProperty);
  res.status(201).json(newProperty);
});

module.exports = router;