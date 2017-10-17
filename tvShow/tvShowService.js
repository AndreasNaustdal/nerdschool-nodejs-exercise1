const TvShow = require('./TvShow');

class TvShowService {
  constructor() {
    this.tvShows = [
      new TvShow(1, 'Forviklingar', 'Drama'),
      new TvShow(2, 'Ut i Vår Hage', 'Comedy')
    ];
  }
  getAll() {
    return this.tvShows;
  }
}
module.exports = new TvShowService();
