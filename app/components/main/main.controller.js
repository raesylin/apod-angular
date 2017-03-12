'use strict';

var $ = require('jquery');

var mainCtrl = /*@ngInject*/ function(dataService, $routeParams, $location, $route, $scope, $timeout) {

	console.log('reloading');
	var vm = this;
	$scope.data = {
		thisDay: null,
		picture: {}
	};

	vm.changeDate = changeDate;
	vm.keyUp = keyUp;
	vm.toggleContentUp = toggleContentUp;
	vm.hideNext = null;
	vm.content = true;
	vm.contentUp = false;
	vm.toggleContent = toggleContent;
	vm.scrollbarConfig = {
		autoHideScrollbar: false,
		theme: 'rounded-dots',
		advanced: {
			updateOnContentResize: true
		},
		scrollInertial: 0,
		scrollbarPosition: 'inside'
	};

	$scope.$on('$routeChangeSuccess', function handleRouteChangeEvent(event) {
		$scope.data.thisDay = $routeParams.date || dataService.initDate();
		setPicture($scope.data.thisDay);
	});

	

	/*==========================================
	=            internal functions            =
	==========================================*/

	function toggleContentUp () {

		if ($(window).width() <= 768) {
			vm.contentUp = !vm.contentUp;
		}
		
	}

	function toggleContent(operation) {
		/* if operation is true, show content */
		console.log(operation);
		console.log(typeof operation);
		// vm.content = operation;
		vm.content = !vm.content;
	}


	function keyUp(keyCode) {

		if (keyCode === 37) {
			changeDate('previous');
		} 

		if (keyCode === 39) {
			changeDate('next');
		}

	}

	function changeDate (direction) {
		if (direction === 'next' && $scope.data.thisDay === moment().format('YYYY-MM-DD')) {

			alert('Tomorrow is not here yet! No peeking...');
			return;

		} else {
			
			$scope.data.thisDay = dataService.setDate(direction, $scope.data.thisDay);
			$location.path($scope.data.thisDay);
		}
		
	}	

	function setPicture (date) {
		// temp for development purpose
// 		$scope.data.picture = {
//     "copyright": "Vincent Bouchama",
//     "date": "2017-03-02",
//     "explanation": "From northern Patagonia, morning skies were clear and blue on Sunday, February 26. This sweeping composite scene, overlooking Hermoso Valle, Facundo, Chubut, Argentina, follows the Sun after sunrise, capturing an annular solar eclipse. Created from a series of exposures at three minute intervals, it shows the year's first solar eclipse beginning well above the distant eastern horizon. An exposure close to mid-eclipse recorded the expected ring of fire, the silhouette of the New Moon only slightly too small to cover the bright Sun. At that location on planet Earth, the annular phase of the eclipse lasted a brief 45 seconds.",
//     "hdurl": "http://apod.nasa.gov/apod/image/1703/aseFeb2017_Bouchama.jpg",
//     "media_type": "image",
//     "service_version": "v1",
//     "title": "Annular Eclipse After Sunrise",
//     "url": "assets/img/placeholder.jpg"
// };


		// uncomment after development:
		dataService.getPicture(date)
			.then(function(result) {
				
				/* hide next picture arrow if theDay is today */
				vm.hideNext = ($scope.data.thisDay === moment().format('YYYY-MM-DD'));

				$scope.data.picture = result;
				if ($scope.data.picture.media_type === 'video') {
					vm.playerOptions = {
						controls: 2,
						autoplay: 0,
						disablekb: 1,
						showinfo: 0
					};
				}
			});
	}

	/*=====  End of internal functions  ======*/

};

module.exports = mainCtrl;