angular.module("evaluation")
	.factory('dataservice', dataservice);

	function dataservice($http){
		var employee = {};
		var service ={
			getEmployee : getEmployee,
			login : login,
			getEmpEval : getEmpEval,
			getMgrEval : getMgrEval,
			addEval : addEval
		};
		return service;

		function getEmployee() {
			return employee;
		}

		//post login details and get server security check response and employee details, if ok, proceed, if not error message
		function login(mail, password) {
			employee = {id : 1, name : "Johhny Doe", manager : "John Doe"};
			// return $http.post('notsurewhaturl', {})
			// 	.then(reactToOKLogin);
			// 	.catch(reactToBadLogin);
			return true;
		};

		function okLogin(data) {
			return data.val;
		}


		//when you log in as emp, pull all the evaluations attached to your name and id
		function getEmpEval(empId) {
			var evals = [{id:1, manager: "John Manager", date : "irrelevant date", descript : "lasjdlakjldskjfoijewq", mark : 55},
			{id:1, manager: "John Manager 2", date : "irrelevant date 2", descript : "lasjdlakjldskjfoijewq", mark : 4}]
			console.log("I got you your emp evals");
			return(evals);
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