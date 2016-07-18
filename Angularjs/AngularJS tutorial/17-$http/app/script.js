/// <reference path="bower_components/angular/angular.js" />

var app = angular
  .module("myModule", [])
  .controller("myController", ($scope, $http) => {
    $http.get('data.json')
      .then((response) => {
        $scope.employees = response.data;
      });
  });
