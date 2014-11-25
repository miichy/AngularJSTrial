var playerService = angular.module('playerService',['ngResource']);

playerService.factory('Player',['$resource',function($resource){
	return $resource('players/:playerId.json',{},{
		query:{method:'GET',params:{playerId:'players'},isArray:true}
	});
}]);