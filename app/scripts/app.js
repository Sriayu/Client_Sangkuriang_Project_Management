'use strict';

/**
 * @ngdoc overview
 * @name kpSangkuriangApp
 * @description
 * # kpSangkuriangApp
 *
 * Main module of the application.
 */
angular
  .module('kpSangkuriangApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/agile', {
        templateUrl: 'views/agile.html',
        controller: 'AgileCtrl'
      })
      .when('/issue_detail/:id', {
        templateUrl: 'views/issue_detail.html',
        controller: 'IssueDetailCtrl'
      })
      .when('/issues/:id', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/project/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/user_role/:id', {
        templateUrl: 'views/user_role.html',
        controller: 'UserRoleCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
