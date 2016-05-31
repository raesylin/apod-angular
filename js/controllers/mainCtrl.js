'use strict';

angular.module('app')
.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {

	
	// Initialize

	$scope.today = moment();					// Initializing the default
	$scope.todayString = $scope.today.format("YYYY-MM-DD");
	$scope.currentDate = moment($scope.today);	// Clone today for manipulation
	$scope.currentDateString = $scope.currentDate.format("YYYY-MM-DD");
	$scope.apodURLString = $scope.currentDate.format("YYMMDD");

	// $scope.notShowSheet = true;

	// Deal with dates ----------------------------------------------------
	// Using momentjs

	$scope.getPrevious = function() {
		// get the date of previous page
		return moment($scope.currentDate).subtract(1, 'd');

	};

	$scope.getNext = function() {
		// get the date of next page
		return	moment($scope.currentDate).add(1, 'd');

	};

	$scope.setCurrentDate = function(direction) {

		// Deal with info sheet first (hide it when sliding pages)
		// $scope.notShowDescription = true;

		if (direction === 1) {
			if ($scope.currentDateString == $scope.todayString) {
				$scope.currentDate = $scope.currentDate;
			} else {
				$scope.currentDate = $scope.getNext();
			};
		} else if (direction === -1) {
			$scope.currentDate = $scope.getPrevious();
		}

		$scope.currentDateString = $scope.currentDate.format("YYYY-MM-DD");
		dataService.getPicture($scope.currentDateString)
			.then(onComplete, onError);
		$scope.apodURLString = $scope.currentDate.format("YYMMDD");
	};
	// -------------------------------------------------------------
	// Processing data query results

	var onComplete = function(data) {
		$scope.picture = data;
		$scope.previousDayString = moment($scope.currentDate).subtract(1, 'd').format('YYYY-MM-DD');
		$scope.nextDayString = moment($scope.currentDate).add(1, 'd').format('YYYY-MM-DD');
		$scope.picture.picurl = $scope.picture.hdurl || $scope.picture.url;

	};

	var onError = function(reason) {
		console.log("Error: " + reason);
	};

	dataService.getPicture($scope.currentDateString)
		.then(onComplete, onError);

	// Determine if right arrow should appear
	$scope.hideArrow = function() {
		return ($scope.currentDateString == $scope.todayString);
	};

	// Interactions
	// $scope.expandSheet = function() {
	// 	$scope.notShowSheet = !$scope.notShowSheet;
	// };

	// Deal with scrollbar
	$scope.jqueryScrollbarOptions = {
		"onScroll": function(y, x) {
			if(y.scroll == y.maxScroll) {
				console.log('Scrolled to bottom');
			}
		}
	};

}]);