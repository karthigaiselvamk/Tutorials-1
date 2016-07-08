/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", ($scope) => {

        var employees = [
            {
                name: "Ben",
                gender: "Male",
                salary: 55000,
                city: "London"
            },
            {
                name: "Sara",
                gender: 2,
                salary: 68000,
                city: "Chicago"
            },
            {
                name: "Mark",
                gender: "Male",
                salary: 57000,
                city: "Chennai"
            },
            {
                name: "Pam",
                gender: "Female",
                salary: 53000,
                city: "London"
            },
            {
                name: "Todd",
                gender: "Male",
                salary: 60000,
                city: "Chennai"
            }
        ]

        $scope.employees = employees
    });
