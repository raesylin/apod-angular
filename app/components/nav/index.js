'use strict';

var app = require('angular').module('app');

app.directive('navView', require('./nav.directive'));
app.controller('navCtrl', require('./nav.controller'));