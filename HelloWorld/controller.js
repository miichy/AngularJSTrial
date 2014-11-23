/*angular.module("myApp",[]).controller("HelloController",["$scope",function() {
//  $scope.greeting = "Hello" ;
//}]);*/

(function(angular){
	function HelloController($scope,$location){
		$scope.greeting = {text:"Hello"}; 
		location = "###";
	}

	angular.module("myApp",[]).controller('HelloController',["$scope",HelloController]);

})(angular);