/// <reference path="bower_components/angular/angular.js" />

var app = angular
  .module("myModule", [])
  .controller("myController", ($scope, $http, $log) => {

    $http({
      method: 'GET',
      url: 'data.json'
    }).then(successCallBack, errorCallBack);

    function successCallBack(response) {
      $scope.employees = response.data;
      $log.info(response);
    }

    function errorCallBack(response) {
      $scope.error = response.data;
    }

  });
