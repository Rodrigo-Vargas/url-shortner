var expect    = require("chai").expect;
var UrlShortnerHelper = require("../app/helpers/urlShortnerHelper");
var urlShortnerHelper = new UrlShortnerHelper();


describe("Url Shortner Tests ", function() {
  describe("Validate 'www.'' url Format", function() {
    it("validator must returning false", function() {
      var valid  = urlShortnerHelper.isAValidUrl("www.google.com");

      expect(valid).to.equal(false);
    });
  });

  describe("Validate 'http://www.'' url Format", function() {
    it("validator must returning true", function() {
      var valid  = urlShortnerHelper.isAValidUrl("http://www.google.com");

      expect(valid).to.equal(true);
    });
  });

  describe("Validate 'https://www.'' url Format", function() {
    it("validator must return false", function() {
      var valid  = urlShortnerHelper.isAValidUrl("https://www.google.com");

      expect(valid).to.equal(false);
    });
  });

  describe("Validate 'http://'' url Format", function() {
    it("validator must returning false", function() {
      var valid  = urlShortnerHelper.isAValidUrl("http://google.com");

      expect(valid).to.equal(false);
    });
  });

  describe("Validate 'https://'' url Format", function() {
    it("validator must return false", function() {
      var valid  = urlShortnerHelper.isAValidUrl("https://google.com");

      expect(valid).to.equal(false);
    });
  });

  describe("Validate invalid Format", function() {
    it("validator must return false", function() {
      var valid  = urlShortnerHelper.isAValidUrl("asdasdas");

      expect(valid).to.equal(false);
    });
  });
});