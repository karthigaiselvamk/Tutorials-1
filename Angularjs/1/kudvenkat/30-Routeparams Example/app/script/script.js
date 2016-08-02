/// <reference path="bower_components/angular/angular.js" />

var app = angular
  .module("myModule", ["ngRoute"])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when("/home", {
        templateUrl: "templates/home.html",
        controller: "homeController"
      })
      .when("/courses", {
        templateUrl: "templates/courses.html",
        controller: "coursesController"
      })
      .when("/students", {
        templateUrl: "templates/students.html",
        controller: "studentsController"
      })
      .when("/student/:id", {
        templateUrl: "templates/studentDetails.html",
        controller: "studentDetailsController"
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
  .controller("studentDetailsController", function ($scope, $http, $routeParams) {
    $http({
      url: "../data/student.json",
      params: { id: $routeParams.id },
      method: "get"
    })
      .then(function (response) {
        angular.forEach(response.data, function(value) {
          if(value.id == $routeParams.id)
            $scope.student = value;
        });
      })
  })