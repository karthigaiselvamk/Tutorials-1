/// <reference path="bower_components/angular/angular.js" />

var app = angular
  .module("myModule", [])
  .controller("myController", ($scope, $location, $anchorScroll) => {
    $scope.scrollTo = scrollTo;

    function scrollTo(scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll.yOffset = 20;
      $anchorScroll();
    }
  });
