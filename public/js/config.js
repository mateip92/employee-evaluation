angular
	.module('evaluation')
	.config(config);

function config($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			controller: 'LoginController',
			templateUrl: 'views/login.html'
		})
		.state('employee', {
			url: '/employee/:id',
			controller: 'EvaluationController',
			templateUrl: 'views/employeeView.html'
		})
		.state('manager', {
			url: '/manager/:id',
			controller: 'EvaluationController',
			templateUrl: 'views/managerView.html'
		})
		$urlRouterProvider.otherwise('/login');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];