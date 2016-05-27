'use strict';

angular.module('app')
.directive('picSheet', function() {
	return {
		templateUrl: 'templates/picSheet.html',
		controller: 'mainCtrl',
		replace: true
	};

});