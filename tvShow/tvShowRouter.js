const express = require('express');
const tvShowRouter = express.Router();
const tvShowService = require('./TvShowService');

tvShowRouter.get('/', (req, res) => {
  res.json(tvShowService.getAll());
});
module.exports = tvShowRouter;
