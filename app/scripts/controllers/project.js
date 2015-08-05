'use strict';

/**
 * @ngdoc function
 * @name kpSangkuriangApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the kpSangkuriangApp
 */
angular.module('kpSangkuriangApp')
  .controller('ProjectCtrl', function($scope, $http, $routeParams) {
   $http.get("http://192.168.1.47:9000/api/viewProject/"+$routeParams.id)
   .success(function (response) {$scope.names = response.Data;});
  });

