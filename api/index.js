const express = require('express');
const propertiesRouter = require('./properties');
const logger = require('./logger');

const router = express.Router();

// Mount properties routes
router.use('/properties', propertiesRouter);

// Apply logging middleware
router.use(logger.logRequest);

module.exports = router;