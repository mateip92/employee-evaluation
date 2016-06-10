angular.module('evaluation')
	.controller('LoginController', function($scope, $state, dataservice){

		$scope.employee = dataservice.getEmployee();
		
		$scope.selectRole = function(val) {
			$scope.manager = val;
		}
		
		$scope.role = {};
		
		$scope.user = {
			email : "",
			password : ""
		}

		$scope.tryLogin = function() {$state.go("employee");
			if($scope.user.email !== "" && $scope.user.password !== ""){
				if(dataservice.login($scope.email, $scope.password) && !$scope.manager){
					$state.go("employee");
				}
				if(dataservice.login($scope.email, $scope.password) && $scope.manager){
					$state.go("manager");
				}
			}
		}
	});