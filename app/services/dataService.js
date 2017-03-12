'use strict';

var dataService = /*@ngInject*/ function($http) {

	var self = this;
	var apiKey = 'eDPVcxeGKAu9cLMSsn9MEIMnvjOtvSmKABqngm6m';

	self.services = {
		getPicture: getPicture,
		initDate: initDate,
		setDate: setDate,
		today: moment()
	};

	return self.services;

	/*============================================
	=            function definitions            =
	============================================*/
	
	function setDate (direction, thisDay) {
		if (direction === 'next') {
			return moment(thisDay).add(1, 'd').format('YYYY-MM-DD');
		} else if (direction === 'previous') {
			return moment(thisDay).subtract(1, 'd').format('YYYY-MM-DD');
		}
	}

	function initDate () {
		// var today = moment();
		// var todayString = today.format('YYYY-MM-DD');
		return moment().format('YYYY-MM-DD');
	}

	function getPicture (date) {
		var queryUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey + '&date=' + date;

		return $http.get(queryUrl)
				.then(function(response) {
					console.log(response.data);
					// response.data.url = response.data.hdurl || response.data.url;
					return response.data;
				});
	}
	
	/*=====  End of function definitions  ======*/
	

	

};

module.exports = dataService;