const express = require('express');
const app = express();
const tvShowRouter = express.Router();
const tvShowService = require('./TvShowService');

tvShowRouter.route('/')
.get((req, res) => {
  res.json(tvShowService.getAll());
})
.post((req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const newTVShow = tvShowService.createTvShow(name, genre);
  res.send(newTVShow);
});

tvShowRouter.route('/:tvShowId').get((req, res) => {
  const tvShowId = parseInt(req.params.tvShowId);
  const tvShow = tvShowService.getById(tvShowId);
  res.send(`Fetching TV Show with the id ${tvShowId}.
    The TV Show is ${tvShow.name} and is of the genre ${tvShow.genre}`);
});
module.exports = tvShowRouter;
