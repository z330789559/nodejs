/**
 * Created by Administrator on 2015/7/29.
 */
var controller=angular.module("myApp.view",[]);
var service=angular.module("myApp.service",[]);
var directive =angular.module('myApp.directive',[]);
directive.directive('ngsButterbar', ['$rootScope',
        function ($rootScope) {
            return {
                link: function (scope, element) { //attrs
                    element.hide();

                    $rootScope.$on('$routeChangeStart', function () {
                        element.show();
                        $('div[ng-view]').css('opacity', '0.5');
                    });

                    $rootScope.$on('$routeChangeSuccess', function () {
                        element.hide();
                        $('div[ng-view]').css('opacity', '1');
                    });
                }
            };
        }]
).directive("inputtype",
       ['$parse','$log','$timeout',function ($parse,$log,$timeout) {
                   return {
                        restrict: 'A',

                        link: function (scope, element,attrs) { //attrs
                            element.on("click",function(){
                                scope.$watch(attrs.inputtype, function(value) {
                                    if (value) {
                                        element.parent().find("input").attr('type',"text");
                                    }else{
                                        element.parent().find("input").attr('type',"password") ;

                                    };
                                });
                            });

                        }
                    };
        }]) ;
//'$stateProvider','$urlRouterProvider','$interpolateProvider','$locationProvider',
angular.module('myAppjs', [
    'ui.router',
    'myApp.directive',
    'myApp.view',
    "myApp.service",
    'myApp.version'
])
    .config(function($stateProvider,$urlRouterProvider,$interpolateProvider) {
            $interpolateProvider.startSymbol('{[{');
            $interpolateProvider.endSymbol('}]}');
           $urlRouterProvider.otherwise('/index/view5');
        $stateProvider.state('index', {
            url:"/index",
            templateUrl: 'views/menu.html'
        })
            .state('index.view1',{
            url: '/view1',
            templateUrl: 'views/view1/view1.html',
            controller: 'View1Ctrl'

        }).state('index.login',{
            url: '/login',
            templateUrl: 'views/view2/view2.html',
            controller: 'View2Ctrl'
        }).state('index.view3', {
            url: '/view3',
            templateUrl: 'views/view3/view3.html',
            controller: 'View3Ctrl'

        }).state('index.view3.publish', {
                url: '/publish',
                templateUrl: 'views/view3/publish.html',
                controller: 'publishCtrl'

            }).state('index.view3.manage', {
                url: '/manage',

                templateUrl: 'views/view3/manage.html',
                controller: 'manageCtrl'

            }).state('index.view3.me', {
                url: '/me',

                templateUrl: 'views/view3/me.html',
                controller: 'meCtrl'

            }).state('index.view4', {
            url: '/view4',
                    templateUrl: 'views/view4/view4.html',
                    controller: 'View4Ctrl'
        }).state('index.view5', {
            url: '/view5',
                    templateUrl: 'views/view5/view5.html',
                    controller: 'View5Ctrl'

        }).state('index.activityList',{
            url: '/activityList/:startcity/:startTime/:days/:costfee',
                    templateUrl: 'views/view1/activityList.html',
                    controller: 'activityList'

        }).state('index.activityDetail',{
                url: '/activityDetail/:activityId',
                templateUrl: 'views/view1/activityDetail.html',
                controller: 'activityDetailController'

            });

    });

