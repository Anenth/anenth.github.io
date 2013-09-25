'use strict';

var app = angular.module('anenthWebsiteApp');
app.controller('MainCtrl', ['$scope','$window', function ($scope, $window){
	var w = angular.element($window);
	$scope.getHeight = function(){
		return w.height();
	};
	$scope.$watch($scope.getHeight, function(newValue){
		// angular.element('section').height(newValue);
		angular.element('.height-top').height(newValue/3);
	});
	w.bind('resize', function(){
		$scope.apply();
	});
}]);

