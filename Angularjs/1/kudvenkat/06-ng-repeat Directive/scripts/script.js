/// <reference path="angular.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {

       var countries = [
           {
               name: "UK",
               cities: [
                   {name: "London"},
                   {name: "Manchester"},
                   {name: "Birmingham"}
               ]
           },
           {
               name: "Norway",
               cities: [
                   {name: "Oslo"},
                   {name: "Bergen"},
                   {name: "Trondheim"}
               ]
           },
           {
               name: "USA",
               cities: [
                   {name: "Washington"},
                   {name: "San Diego"},
                   {name: "Los Angeles"}
               ]
           },
       ]

       $scope.countries = countries;
    });
