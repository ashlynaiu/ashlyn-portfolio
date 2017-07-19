'use strict';

/**
 * @ngdoc function
 * @name ashlynPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynPortfolioApp
 */
angular.module('ashlynPortfolioApp').controller('MainCtrl', function($scope, $state, $interval, $http){
    $scope.projects = [];
    $scope.state = $state;

    $http.get('/scripts/json/project.json')
    .then(function(res){
        $scope.projects = res.data;
    });

    $scope.changeBackground = function() {
      var hue = 0;

      var changeHue = function() {
        if ($state.current.name === 'home') {
          var col1 = Math.abs((hue % 720) - 360);
          var col2 = Math.abs( ( (hue+90) % 720) - 360);
          hue++ ;
          document.getElementById('header-animation').style.background = 'linear-gradient(to right, hsl('+col1 +',70%, 80%) 0%,hsl('+col2 +',90%, 80%) 100%)';
        }
      };
      $interval(changeHue, 100);
    }

    $scope.changeBackground();
});
