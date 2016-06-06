angular.module("evaluation")
	.directive("customModal", function() {
		return {
			restrict : 'E',
			templateUrl : 'js/common/modal/modal.html',
			scope {
				assesment : "=assesment"
			},

			link : link;
		}

		function link() {
			console.log("WORKING");
		}
	});