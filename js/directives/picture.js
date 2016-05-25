'use strict';

angular.module('app')
.directive('picture', function() {
	return {
		templateUrl: '/apod/templates/picture.html',
		controller: 'mainCtrl',
		replace: true
	};

});