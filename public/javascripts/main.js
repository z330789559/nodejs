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
);
//'$stateProvider','$urlRouterProvider','$interpolateProvider','$locationProvider',
angular.module('myAppjs', [
    'ui.router',
    'myApp.view',
    "myApp.service",
    'myApp.directive',
    'myApp.version'
])
    .config(function($stateProvider,$urlRouterProvider,$interpolateProvider) {
            $interpolateProvider.startSymbol('{[{');
            $interpolateProvider.endSymbol('}]}');
           $urlRouterProvider.otherwise('/index/view5');
        $stateProvider.state('index', {
            url:"/index",
            templateUrl: 'index.html',
            abstruct:true
        }).state('index.view1',{
            url: '/view1',
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'

        }).state('index.view2',{
            url: '/view2',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        }).state('index.view3', {
            url: '/view3',

            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'

        }).state('index.view4', {
            url: '/view4',
                    templateUrl: 'view4/view4.html',
                    controller: 'View4Ctrl'
        }).state('index.view5', {
            url: '/view5',
                    templateUrl: 'view5/view5.html',
                    controller: 'View5Ctrl'

        }).state('index.activityList',{
            url: '/activityList/:startcity',
                    templateUrl: 'view1/activityList.html',
                    controller: 'activityList'

        });
        //$stateProvider.otherwise({redirectTo: '/view5'});

    }).run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);;
    // .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    //    $ocLazyLoadProvider.config({
    //        loadedModules: ['monitorApp'],
    //        //主模块名,和ng.bootstrap(document, ['monitorApp'])相同
    //        jsLoader: requirejs,
    //        //使用requirejs去加载文件
    //        files: ['modules/summary','modules/appEngine','modules/alarm','modules/database'],
    //        //主模块需要的资源，这里主要子模块的声明文件
    //        debug: true
    //    });
    //}]);
