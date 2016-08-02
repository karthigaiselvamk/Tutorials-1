/// <reference path="bower_components/angular/angular.js" />

var app = angular
  .module("myModule", [])
  .controller("myController", ($scope, $http, $location, $anchorScroll) => {

    $http({
      method: 'GET',
      url: 'data/country.json'
    }).then(successCallBack, errorCallBack);

    $scope.scrollTo = scrollTo;

    function successCallBack(response) {
      $scope.countries = response.data;
    }

    function errorCallBack(response) {
      $scope.error = response.data;
    }

    function scrollTo(countryName) {
      $location.hash(countryName);
      $anchorScroll;
    }

  });
