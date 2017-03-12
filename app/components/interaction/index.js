'use strict';

var app = require('angular').module('app');

app.directive('interactionView', require('./interaction.directive'));
app.controller('interactionCtrl', require('./interaction.controller'));