/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", ($scope) => {
        var countries = [
            { 
                name: 'India',
                cities: [
                 { name: "Hyderabad" },   
                 { name: "Chennai" }   
                ]
            },
            { 
                name: 'USA',
                cities: [
                 { name: "Los Angeles" },
                 { name: "Chicago" }   
                ]
            }
        ];

        $scope.countries = countries;
    });
