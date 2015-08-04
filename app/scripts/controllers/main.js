'use strict';

/**
 * @ngdoc function
 * @name ashlynPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynPortfolioApp
 */
angular.module('ashlynPortfolioApp')
  .controller('MainCtrl', function($scope, $http){
    $http.get('scripts/json/project.json').success(function(data){
      $scope.projects = data;
    });
});
