angular.module("evaluation")
	.directive('assesmentModule', function($uibModal, $log){
		return {		
			restrict: 'E',
			templateUrl: 'js/assesmentView/assesmentDirective.html',
			scope : {
				assesment : "=assesment"
			},
			link: link
		}

		function link($scope, iElm, iAttrs, controller) {

			$scope.openEval = function() {
				console.log($scope.assesment)
			}

			$scope.items = ['item1', 'item2', 'item3'];
			
			$scope.open = function (size) {
				console.log("OPEN SESAME!")
		    	var modalInstance = $uibModal.open({
			      	animation: $scope.animationsEnabled,
			      	templateUrl: 'js/common/modal/modal.html',
			      	controller: 'ModalInstanceCtrl',
			      	size: size,
		      		resolve: {
				      	items: function () {
				        	return $scope.items;
				        }
	     			}
    		});

	   		modalInstance.result.then(function (selectedItem) {
	      		$scope.selected = selectedItem;
	    	}, function () {
	      		$log.info('Modal dismissed at: ' + new Date());
	    	});
		};
		}
	});