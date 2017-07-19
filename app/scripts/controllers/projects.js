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
    $scope.projects = [];

   $http.get('/scripts/json/project.json')
    .then(function(res){
        $scope.projects = res.data;
    });
});
