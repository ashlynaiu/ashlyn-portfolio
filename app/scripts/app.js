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
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('portal', {
        url: '/portal',
        templateUrl: 'views/portal.html',
        controller: 'PortalCtrl'
      })
      .state('homeslice', {
        url: '/homeslice',
        templateUrl: 'views/homeslice.html',
        controller: 'HomesliceCtrl'
      })
      .state('prelimb', {
        url: '/prelimb',
        templateUrl: 'views/prelimb.html',
        controller: 'PrelimbCtrl'
      });
  });
