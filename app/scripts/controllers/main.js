'use strict';

/**
 * @ngdoc function
 * @name ashlynPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynPortfolioApp
 */
angular.module('ashlynPortfolioApp')
  .controller('MainCtrl', function($scope, $state, projectInfo){
    $scope.projects = [];
    projectInfo.items().success(function(data){
        $scope.projects = data;
    });
    console.log($state.current.name);
});
