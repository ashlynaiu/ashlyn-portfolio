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
    'ui.router',
    'ui.event',
    'ui.mask'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state ('frame', {
        abstract: true,
        url: '/',
        templateUrl: 'views/frame.html'
      })
      .state ('navigation', {
        abstract: true,
        parent: 'frame',
        templateUrl: 'views/navigation.html'
      })
      .state('home', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: 'about',
        parent: 'frame',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('projects', {
        url: 'projects',
        parent: 'frame',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('portal', {
        url: 'portal',
        parent: 'frame',
        templateUrl: 'views/portal.html',
        controller: 'PortalCtrl'
      })
      .state('homeslice', {
        url: 'homeslice',
        parent: 'frame',
        templateUrl: 'views/homeslice.html',
        controller: 'HomesliceCtrl'
      })
      .state('prelimb', {
        url: 'prelimb',
        parent: 'frame',
        templateUrl: 'views/prelimb.html',
        controller: 'PrelimbCtrl'
      })
      .state('sandbox', {
        url: 'sandbox',
        parent: 'frame',
        templateUrl: 'views/sandbox.html',
        controller: 'SandboxCtrl'
      });
  }).run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
