'use strict';

function urlShortner (db) {
  var UrlShortnerHelper = require(process.cwd() + '/app/helpers/urlShortnerHelper.js');

  var urls = db.collection('urls');

  this.redirectUrl = function(req, res){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    
    var urlQuery = { 
      "short_url": {
        "$eq": fullUrl
      }
    }

    urls.findOne(urlQuery, {}, function(err, result) {
      if (err) {
        throw err;
      }

      if (result)
      {
        res.redirect(result.original_url)
      }
      else
      {
        res.json({"error":"No short url found for given input"});         
      }
    });
  }

  this.addUrl = function(req, res) {
    var urlShortnerHelper = new UrlShortnerHelper();
    
    if (!urlShortnerHelper.isAValidUrl(req.params.url)){
      res.json( { "error" : "URL invalid. Valid format is http://www.example.com" } );
      return;
    }

    var hostUrl = req.protocol + '://' + req.get('host');

    var shortUrl = urlShortnerHelper.generateShortUrl(hostUrl)

    var insertObj = { 'original_url': req.params.url, 
                      'short_url' : shortUrl }

    urls.insert(insertObj, function (err) {
      if (err) {
         throw err;
      }

      res.json(insertObj);
    });
  }
}

module.exports = urlShortner;
