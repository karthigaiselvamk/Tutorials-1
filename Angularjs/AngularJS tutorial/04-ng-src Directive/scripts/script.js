/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        var country = {
            name: "Norway",
            capital: "Oslo",
            flag: "images/norway.svg"
        };

        $scope.country = country;
    });
