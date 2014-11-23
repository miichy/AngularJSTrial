var playerController = angular.module('playerController',[]);

playerController.controller('ListCtrl',['$scope','$http',
	function($scope,$http){
		$http.get('./players/players.json').success(function(data){
			$scope.players = data;
		});

		$scope.orderProp = '-age';
	}]);

playerController.controller('DetailCtrl',['$scope','$routeParams','$http',
	function($scope,$routeParams,$http){
		//alert($routeParams.playerId);
		$http.get('./players/'+$routeParams.playerId+'.json').success(function(data){
			$scope.player = data;
		});
		
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