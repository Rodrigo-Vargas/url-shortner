'use strict';

function urlShortnerHelper (){
  this.generateShortUrl = function(hostUrl){
    var shortUrl = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 5; i++ )
        shortUrl += possible.charAt(Math.floor(Math.random() * possible.length));

    return hostUrl + '/' + shortUrl;
  }

  this.isAValidUrl = function(url){
    if (url.match(/^(http:\/\/www\.).+(\.com)$/) === null)
      return false;
    else
      return true;
  }
}

module.exports = urlShortnerHelper;
