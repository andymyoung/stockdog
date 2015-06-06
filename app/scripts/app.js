'use strict';

/**
 * @ngdoc overview
 * @name stockdogApp
 * @description
 * # stockdogApp
 *
 * Main module of the application.
 */
angular
  .module('stockdogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
