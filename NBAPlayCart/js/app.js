'use strict';

var myApp = angular.module('myApp',['ngRoute',
	'playerController',
	'playerFilter',
	'playerService',
	'playerAnimation']);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/players',{
				templateUrl:"partials/player-list.html",
				controller:"ListCtrl"
			}).
			when('/players/:playerId',{
				templateUrl:"partials/player-detail.html",
				controller:"DetailCtrl"
			}).
			otherwise({
				redirectTo:'/players'
			});
	}]);