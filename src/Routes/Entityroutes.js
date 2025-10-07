const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const entityController = require('../controllers/EntityController');

router.get('/', asyncHandler(entityController.getAllEntities));
router.get('/:id', asyncHandler(entityController.getEntityById));
router.post('/', asyncHandler(entityController.createEntity));

module.exports = router;
