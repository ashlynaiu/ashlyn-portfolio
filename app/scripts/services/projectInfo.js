'use strict';
angular.module('ashlynPortfolioApp').factory('projectInfo', function($http) { 
    return{
        items : function() {
            return $http({
                url: '/scripts/json/project.json',
                method: 'GET'
            });
        }
    };    
});