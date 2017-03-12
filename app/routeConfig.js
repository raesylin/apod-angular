'use strict';

var routeConfig = /*@ngInject*/ function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'app/components/main/main.view.html',
			// controller: 'mainCtrl', 
			// controllerAs: 'main',
			// reloadOnSearch: false
		})
		.when('/:date', {
			templateUrl: 'app/components/main/main.view.html',
			// controller: 'mainCtrl',
			// controllerAs: 'main',
			// reloadOnSearch: false
		})
		.otherwise({
			redirectTo: '/'
		});

};

module.exports = routeConfig;