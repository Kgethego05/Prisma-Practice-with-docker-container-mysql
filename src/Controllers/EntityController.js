const entityService = require('../services/EntityService');

exports.getAllEntities = async (req, res) => {
  const entities = await entityService.getAll();
  res.json(entities);
};

exports.getEntityById = async (req, res) => {
  const entity = await entityService.getById(req.params.id);
  if (!entity) {
    res.status(404);
    throw new Error('Entity not found');
  }
  res.json(entity);
};

exports.createEntity = async (req, res) => {
  const data = req.body;

  if (!data.name) {
    res.status(400);
    throw new Error('Name field is required');
  }

  const newEntity = await entityService.create(data);
  res.status(201).json(newEntity);
};
