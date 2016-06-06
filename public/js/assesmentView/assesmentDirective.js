angular.module("evaluation")
	.directive('assesmentModule', function(){
		return {		
			restrict: 'E',
			templateUrl: 'js/assesmentView/assesmentDirective.html',
			scope : {
				assesment : "=assesment"
			},
			link: link
		}

		function link($scope, iElm, iAttrs, controller) {
				console.log($scope.assesment)

			$scope.openEval = function() {
				console.log($scope.assesment)
			}
		}
	});