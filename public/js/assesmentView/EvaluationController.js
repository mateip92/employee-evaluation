angular.module("evaluation")
	.controller('EvaluationController', function($scope, dataservice){
		var employee = dataservice.getEmployee();
		console.log(employee);
		$scope.assesments = dataservice.getEmpEval(employee.id);

		

		// $scope.assesments = [
		// 	{date : "01-jan-2016", descript: "descriasdasdasdasdasdasdasdasdasdasdsadasdasdsadasdasdasdasdadasdapt", manager:"managerName", mark:"0!"},
		// 	{date : "01-jan-2016", descript: "descript", manager:"managerName", mark:"0!"},
		// 	{date : "01-jan-2016", descript: "descript", manager:"managerName", mark:"0!"},
		// 	{date : "01-jan-2016", descript: "descript", manager:"managerName", mark:"0!"},
		// 	{date : "01-jan-2016", descript: "descript", manager:"managerName", mark:"0!"},
		// 	{date : "01-jan-2016", descript: "descript", manager:"managerName", mark:"0!"},
		// 	{date : "01-jan-2016", descript: "descript", manager:"managerName", mark:"0!"},
		// 	{date : "01-jan-2016", descript: "descript", manager:"managerName", mark:"0!"},
		// ]
	});