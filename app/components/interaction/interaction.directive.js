'use strict';

var interactionView = /*@ngInject*/ function() {
	var directive = {
		templateUrl: 'app/components/interaction/interaction.view.html',
		replace: true,
		restrict: 'E',
		link: link,
		controller: 'interactionCtrl',
		controllerAs: 'interact'
	};

	return directive;

	function link(scope, element, attrs) {
		
	}
};

module.exports = interactionView;