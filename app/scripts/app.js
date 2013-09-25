'use strict';

angular.module('anenthWebsiteApp', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}]);
