'use strict';

var UrlShortner = require(process.cwd() + '/app/controllers/urlShortner.js');

module.exports = function (app, db) {
  var urlShortner = new UrlShortner(db);

  app.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/new/:url(*)')
    .get(urlShortner.addUrl);

  app.route('/:url(*)')
    .get(urlShortner.redirectUrl);
};
