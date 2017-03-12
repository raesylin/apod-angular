'use strict';

var animateControl = /*@ngInject*/ function($timeout) {
	var directive = {
		link: link,
		restrict: 'A'	
	};

	return directive;

	function link(scope, element, attrs) {

		if ($(window).width() <= 768) {
			var pauseTime = 1000;
		} else {
			var pauseTime = 10000;
		}

		var animateTime = 500;

		$timeout(function() {
			element.removeClass('firstload');
		}, pauseTime + animateTime);
	}
};

module.exports = animateControl;