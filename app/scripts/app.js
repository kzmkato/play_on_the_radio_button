'use strict';
angular.module('playOnTheRadioButtonApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/read', {
        templateUrl:'views/read.html',
        controller:'ReadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
