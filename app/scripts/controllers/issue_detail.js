'use strict';

/**
 * @ngdoc function
 * @name kpSangkuriangApp.controller:IssueDetailCtrl
 * @description
 * # IssueDetailCtrl
 * Controller of the kpSangkuriangApp
 */
angular.module('kpSangkuriangApp')
  .controller('IssueDetailCtrl',function($scope, $http, $routeParams) {
   $http.get("http://192.168.1.47:9000/api/detail_issue/"+$routeParams.id)
   .success(function (response) {$scope.names = response.Data;});
   
   $http.get("http://192.168.1.47:9000/api/comment_issue/"+$routeParams.id)
   .success(function (response) {$scope.comments = response.Data;});
  
  });