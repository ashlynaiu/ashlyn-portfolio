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
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('/');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/portal', {
        templateUrl: 'views/portal.html',
        controller: 'PortalCtrl'
      })
      .when('/homeslice', {
        templateUrl: 'views/homeslice.html',
        controller: 'HomesliceCtrl'
      })
      .when('/prelimb', {
        templateUrl: 'views/prelimb.html',
        controller: 'PrelimbCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
