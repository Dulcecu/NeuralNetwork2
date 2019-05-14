'use strict';

angular
    .module('gitHubApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'ngFileUpload'
    ]).config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'tpls/main.html',
                controller: 'MainCtrl'
            })
            .when('/image-filters', {
                templateUrl: 'tpls/image-filters.html',
                controller: 'ImageFiltersCtrl'
            })
            .when('/paint-an-image', {
                templateUrl: 'tpls/paint-an-image.html',
                controller: 'PaintAnImageCtrl'
            })
            .when('/classify-colors', {
                templateUrl: 'tpls/classify-colors.html',
                controller: 'ClassifyColors'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
