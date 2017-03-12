'use strict';

window.$ = window.jQuery = require('jquery');
// var $ = require('jquery');
var angular = require('angular');

require('angular-route');
require('angular-youtube-embed');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');
require('malihu-custom-scrollbar-plugin')($);
require('ng-scrollbars');
require('angular-socialshare');
require('angular-update-meta');

var app = angular.module('app', ['ngRoute', 'youtube-embed', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ngScrollbars', '720kb.socialshare', 'updateMeta']);

require('./common');
require('./components');
require('./services');

app.config(require('./routeConfig'));
angular.bootstrap(document, ['app']);
