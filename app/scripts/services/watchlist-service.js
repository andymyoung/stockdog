'use strict';

/**
 * @ngdoc service
 * @name stockdogApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockdogApp.
 */
angular.module('stockdogApp')
  .service('WatchlistService', function WatchlistService() {
    // [1] Helper: Load watchlists from localStorage
    var loadModel = function () {
      var model = {
        watchlists: localStorage['StockDog.watchlists'] ?
          JSON.parse(localStorage['StockDog.watchlists']) : [],
        nextID: localStorage['StockDog.nextID'] ?
          parseInt(localStorage['StockDog.nextId']) : 0
      };
      return model;
    };

    // [2] Helper: Save watchlists to localStorage
    var saveModel = function () {
      localStorage['StockDog.watchlists'] = JSON.stringify(Model.watchlists);
      localStorage['StockDog.nextID'] = Model.nextID;
    };

    // [3] Helper: Use locash to find a watchlist with given ID
    var findById = function (listID) {
      return _.find(Model.watchlists, function (watchlist) {
        return watchlist.id === parseInt(listID);
      });
    };

    // [4] Return all watchlists or find by given ID
    this.query = function  (listID) {
      if (listId) {
        return findById(listId);
      } else{
        return Model.watchlists;
      }
    };

    // [5] Save a new watchlist to watchlist model
    this.save = function (watchlist) {
      watchlist.id = Model.nextID++;
      Model.watchlists.push(watchlist);
      saveModel();
    };

    //[6] Remove given watchlist from watchlist model
    this.remove = function (watchlist) {
      _.remove(Model.watchlists, function (list) {
        return list.id === watchlist.id;
      });
      saveModel();
    };

    //[7] Initialize MOdel for this singleton service
    var Model = loadModel();
  });
