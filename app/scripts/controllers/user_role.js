'use strict';

/**
 * @ngdoc function
 * @name kpSangkuriangApp.controller:UserRoleCtrl
 * @description
 * # UserRoleCtrl
 * Controller of the kpSangkuriangApp
 */
angular.module('kpSangkuriangApp')
  .controller('UserRoleCtrl', function($scope, $http, $routeParams) {
   $http.get("http://192.168.1.47:9000/api/services/project")
   .success(function (response) {$scope.project = response.Data;});
   
    $http.get("http://192.168.1.47:9000/api/services/role")
   .success(function (response) {$scope.role = response.Data;});
  });
