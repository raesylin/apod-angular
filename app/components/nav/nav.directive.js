'use strict';

var navView = /*@ngInject*/ function() {
	var directive = {
		templateUrl: 'app/components/nav/nav.view.html',
		controller: 'navCtrl',
		controllerAs: 'nav',
		link: link,
		replace: true,
		restrict: 'E'
	};

	return directive;

	function link(scope, element, attrs, nav) {
	}
};

module.exports = navView;