/**
 * @ngdoc function
 * @name rivercity.controller:homeController
 * @description
 * # homeController
 */

angular
  .module('rivercity')
  .controller('homeController',['$scope', homeFunction]);

  function homeFunction($scope, api){
    'use strict';
    $scope.hello = "Hello Tuan!";
  }
