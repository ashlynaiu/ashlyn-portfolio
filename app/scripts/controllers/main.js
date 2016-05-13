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
    function changeBackground() {
      var hue = 0;

      function changeHue (){
        var col1 = Math.abs((hue % 720) - 360);
        var col2 = Math.abs( ( (hue+90) % 720) - 360);
        hue++ ;

        document.getElementById('header-animation').style.background = 'linear-gradient(to right, hsl('+col1 +',70%, 80%) 0%,hsl('+col2 +',90%, 80%) 100%)';
      }
      setInterval (changeHue, 100);
    }
    changeBackground();
});
