'use strict';

/**
 * @ngdoc function
 * @name ashlynPortfolioApp.controller:PortalCtrl
 * @description
 * # PortalCtrl
 * Controller of the ashlynPortfolioApp
 */
angular.module('ashlynPortfolioApp')
  .controller('ProjectsCtrl', function($scope, projectInfo){
    $scope.projects = [];
    projectInfo.items().success(function(data){
        $scope.projects = data;
    });
});
