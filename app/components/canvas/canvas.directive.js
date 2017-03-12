'use strict';

var canvasView = /*@ngInject*/ function($timeout) {

	var directive = {
		templateUrl: 'app/components/canvas/canvas.view.html',
		restrict: 'E',
		replace: true,
		link: link
	};

	return directive;

	function link(scope, element, attrs) {
		$timeout(function() {
			var viewportHeight = $(window).height();
			var viewportWidth = $(window).width();
			var navbarHeight = $('.navbar').outerHeight();

			if (viewportWidth <= 768) {
				$('.canvas').outerHeight(viewportHeight - navbarHeight);
				$('.content').css('top', viewportHeight - navbarHeight);
			}

		});
	}
}

module.exports = canvasView;