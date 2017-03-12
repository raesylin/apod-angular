'use strict';

var navCtrl = /*@ngInject*/ function($scope, dataService, $location) {

	var vm = this;

	vm.today = dataService.today._d;
	vm.selectDate = selectDate;

	/*============================================
	=            function definitions            =
	============================================*/
	
	function selectDate(date) {
		date = moment(date).format('YYYY-MM-DD');
		$location.path(date);
	}
	
	/*=====  End of function definitions  ======*/
	
	// $scope.data.thisDay = moment(vm.thisDay).format('YYYY-MM_DD') || dataService.today;
};

module.exports = navCtrl;