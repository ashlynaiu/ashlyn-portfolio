'use strict';
var Sandbox;

Sandbox = (function() {
    function Sandbox($scope, element) {
    this.$scope = $scope;
    }
    Sandbox.prototype.focusClass = function() {

    };
)};
angular.module('ashlynPortfolioApp').controller('SandboxCtrl', Sandbox);
