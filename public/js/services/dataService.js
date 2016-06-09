angular.module("evaluation")
	.factory('dataservice', dataservice);

	function dataservice($http){
		var service ={
			getEmpEval : getEmpEval;
			getMgrEval : getMgrEval;
			addEval : addEval;
		};
		return service;

		//post login details and get server security check response, if ok, proceed, if not error message
		function login(mail, password) {
			return $http.post('notsurewhaturl', {})
				.then(reactToOKLogin);
				.catch(reactToBadLogin);
		};

		//when you log in as emp, pull all the evaluations attached to your name and id
		function getEmpEval(empId) {
			console.log("I got you your emp evals");
		};

		//when you log in as mgr, pull all the evaluations attached to your name and id
		function getMgrEval () {
			console.log("I got you your evals");
		};

		//server handles whether the eval is new or existing, if already existing it should have id, otherwise it's new and it's added to the db
		function addEval (evaluation) {
			console.log("I posted that eval you gave me");
		};
	};