'use strict';

angular.module('app')
.directive('picSheet', function() {
	return {
		templateUrl: '/apod/templates/picSheet.html',
		controller: 'mainCtrl',
		replace: true
	};

});