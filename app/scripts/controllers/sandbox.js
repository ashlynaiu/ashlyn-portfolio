'use strict';

/**
 * @ngdoc function
 * @name ashlynPortfolioApp.controller:SandboxCtrl
 * @description
 * # SandboxCtrl
 * Controller of the ashlynPortfolioApp
 */
angular.module('ashlynPortfolioApp')
  .controller('SandboxCtrl', function($scope, $timeout){
    var statusClasses = ['inactive', 'onFocus', 'onBlur'];
    var activeColor = 0;
    $scope.modelStatus = function() {
        return (statusClasses[activeColor]);
    };
    $scope.focusCallback = function() {
        activeColor = 1;
    };
    $scope.blurCallback = function() {
        activeColor = 2;
        $timeout(function() {activeColor = 0;}, 2000);
    };
});