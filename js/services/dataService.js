'use strict';

angular.module('app')
.service('dataService', function($http) {

	var apiKey = "eDPVcxeGKAu9cLMSsn9MEIMnvjOtvSmKABqngm6m";


	this.getPicture = function(currentDayString) {

		var queryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + currentDayString;

		return	$http.get(queryUrl)
					.then(function(response) {
						return response.data;
					});

	};

});