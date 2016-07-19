/// <reference path="bower_components/angular/angular.js" />

var app = angular
  .module("myModule", [])
  .controller("myController", ($scope, stringService) => {
    $scope.transformString = (input) => {
      $scope.output = stringService.processString(input);
    }
  });
