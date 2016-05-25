'use strict';

angular.module('app')
.directive('picture', function() {
	return {
		templateUrl: '../templates/picture.html',
		controller: 'mainCtrl',
		replace: true
	};

});