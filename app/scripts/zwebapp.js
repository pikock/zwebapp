'use strict';

angular.module('zwebapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/colors', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'partials/form.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
