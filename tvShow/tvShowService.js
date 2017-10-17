const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
  constructor() {
    this.tvShows = [
      new TvShow("1", 'Forviklingar', 'Drama'),
      new TvShow("2", 'Ut i Vår Hage', 'Comedy')
    ];
  }

  getAll() {
    return this.tvShows;
  }

  getById(id) {
    return this.tvShows.find(tvShow => tvShow.id === id);
  }

  createTvShow(name, genre) {
    const id = createId();
    const tvShow = new TvShow(id, name, genre);
    this.tvShows.push(tvShow);
    return tvShow;
  }

  deleteTvShow(id) {
    this.tvShows = this.tvShows.filter(tvShow => (tvShow.id !== id));
    return this.tvShows;
  }
}
module.exports = new TvShowService();
