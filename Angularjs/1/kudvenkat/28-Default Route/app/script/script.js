/// <reference path="bower_components/angular/angular.js" />

var app = angular
  .module("myModule", ["ngRoute"])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when("/home", {
        templateUrl: "Templates/home.html",
        controller: "homeController"
      })
      .when("/courses", {
        templateUrl: "Templates/courses.html",
        controller: "coursesController"
      })
      .when("/students", {
        templateUrl: "Templates/students.html",
        controller: "studentsController"
      })
      .otherwise({
        redirectTo: "/home"
      })
      $locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope) {
      $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
      $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
      $http.get("../data/student.json")
      .then(function (response) {
        $scope.students = response.data;
      })
    })