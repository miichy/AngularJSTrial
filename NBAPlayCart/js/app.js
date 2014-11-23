'use strict';

var myApp = angular.module('myApp',['ngRoute','playerController']);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/players',{
				templateUrl:"partials/player-list.html",
				controller:"ListCtrl"
			}).
			when('/players/:playerName',{
				templateUrl:"partials/player-detail.html",
				controller:"DetailCtrl"
			}).
			otherwise({
				redirectTo:'/players'
			});
	}]);