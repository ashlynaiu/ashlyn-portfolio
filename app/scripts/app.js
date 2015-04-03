'use strict';

/**
 * @ngdoc overview
 * @name ashlynPortfolioApp
 * @description
 * # ashlynPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('ashlynPortfolioApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
