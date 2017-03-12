'use strict';

var contentView = /*@ngInject*/ function() {
	var directive = {
		templateUrl: 'app/components/content/content.view.html',
		restrict: 'E',
		replace: true,
		link: link
	};

	return directive;

	function link(scope, element, attrs) {
		
		if ($(window).width() <= 768) {
			var viewportHeight = $(window).height();
			var navbarHiddenHeight = 80;
			var contentHeight = viewportHeight - navbarHiddenHeight;
			element.css('height', viewportHeight);
		}
	}
};

module.exports = contentView;