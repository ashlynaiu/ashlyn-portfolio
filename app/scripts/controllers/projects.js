'use strict';

/**
 * @ngdoc function
 * @name ashlynPortfolioApp.controller:PortalCtrl
 * @description
 * # PortalCtrl
 * Controller of the ashlynPortfolioApp
 */
angular.module('ashlynPortfolioApp')
  .controller('ProjectsCtrl', function($scope, $http){
    $http.get('/scripts/json/project.json').success(function(data){
      $scope.projects = data;
    });
});
