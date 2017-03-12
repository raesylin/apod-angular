'use strict';

var interactionCtrl = /*@ngInject*/ function($scope, Socialshare) {

	var vm = this;
	vm.share = share;

	/*============================================
	=            function definitions            =
	============================================*/
	
	function share(provider) {
		console.log($scope.data);
		var postUrl = 'http://raesylin.xyz/apod/#/' + $scope.data.thisDay;

		switch (provider) {
			case 'facebook':
				Socialshare.share({
					'provider': 'facebook',
					'attrs': {
						'socialshareUrl': postUrl,
						'socialshareMedia': $scope.data.picture.url,
						'socialshareText': $scope.data.picture.title,
						'socialshareDescription': $scope.data.picture.explanation,
						'socialshareType': 'feed',
						'socialshareVia': 238897593157013,
						'socialsharePopupHeight': 600,
						'socialsharePopupWidth': 600
					}
				});
				break;
			case 'twitter':
				Socialshare.share({
					'provider': 'twitter',
					'attrs': {
						'socialshareText': $scope.data.picture.title,
						'socialshareHashtags': '#,APOD',
						'socialshareUrl': postUrl,
						'socialsharePopupHeight': 600,
						'socialsharePopupWidth': 600
					}});
				break;
			case 'google':
				Socialshare.share({
					'provider': 'google',
					'attrs': {
						'socialshareUrl': postUrl,
						'socialsharePopupHeight': 600,
						'socialsharePopupWidth': 600
					}});
		}

	}
	
	/*=====  End of function definitions  ======*/
	

	
};

module.exports = interactionCtrl;