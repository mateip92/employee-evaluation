angular.module('evaluation')
	.controller('LoginController', function($scope, $state){
		$scope.t = "text";
		console.log($scope.t)


		$scope.tryLogin = function() {
			console.log("I GO!");
			$state.go("employee");
		}
	})