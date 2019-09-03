const { Router } = require('express');
const Animal = require('../models/Animal.js');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { name, type, diet, weight, age } = req.body;
    Animal
      .create({ name, type, diet, weight, age })
      .then(animal => res.send(animal))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Animal
      .find({})
      .then(animals => res.send(animals))
      .catch(next);
  });
