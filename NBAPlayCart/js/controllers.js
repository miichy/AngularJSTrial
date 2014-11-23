//var NBAPlayerApp = angular.module('NBAPlayerApp',[]);
var playerController = angular.module('playerController',[]);

playerController.controller('ListCtrl',['$scope','$http',
	function($scope,$http){
		$http.get('./players/players.json').success(function(data){
			$scope.players = data;
		});

		$scope.orderProp = '-age';
	}]);

playerController.controller('DetailCtrl',['$scope','$routeParams',
	function($scope,$routeParams){
		$scope.playerName = $routeParams.playerName;
	}]);

/*NBAPlayerApp.controller('ListCtrl',['$scope','$http',function ($scope,$http){
	$http.get("./players/players.json").success(function(data){
		$scope.players = data;
	});

	$scope.orderProp = '-age';
}]);

NBAPlayerApp.controller('DetailCtrl',['$scope','$routeParams',
	function($scope,$routeParams){
		$scope.playerName = $routeParams.playerName;
	}])*/