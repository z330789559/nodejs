/**
 * Created by Administrator on 2015/7/29.
 */
var controller=angular.module("myApp.view",[]);
var service=angular.module("myApp.service",['ngResource']);
angular.module('myApp', [
    'ngRoute',
    'myApp.view',
    "myApp.service",
    'myApp.version',
     'ngResource'
]).
    config(['$routeProvider',"$interpolateProvider", function($routeProvider,$interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
        $routeProvider.when('/view1', {
            templateUrl: 'views/view1/view1.html',
            controller: 'View1Ctrl'
        }).when('/view2', {
            templateUrl: 'views/view2/view2.html',
            controller: 'View2Ctrl'
        }).when('/view3', {
            templateUrl: 'views/view3/view3.html',
            controller: 'View3Ctrl'
        }).when('/view4', {
            templateUrl: 'views/view4/view4.html',
            controller: 'View4Ctrl'
        }).when('/view5', {
            templateUrl: 'views/view5/view5.html',
            controller: 'View5Ctrl'
        }).when('/view/activityList', {
            templateUrl: 'views/view1/activityList.html',
            controller: 'activityList'
        });
        $routeProvider.otherwise({redirectTo: '/view5'});

    }]);
