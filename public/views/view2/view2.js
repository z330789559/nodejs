'use strict';

controller.controller('View2Ctrl', ['$rootScope','$scope','loginService',function($rootScope,$scope,loginService) {

    $scope.isActive=false;
    $scope.selected=true;
    $scope.user="";
    $scope.autologin=false;

        $scope.changeTextType=function(){
            $scope.selected=!$scope.selected;
        }
        $scope.triggleLogin=function(){
            $scope.autologin=!$scope.autologin;
        }
        $scope.submit=function(){
            var params={
                username:$scope.user.name,
                password:$scope.user.password,
                captcha:$scope.user.captcha,
                autologin:$scope.autologin
            }
               var promise=loginService.doLogin(params);
                   promise.then(function success(data) {
                    $scope.activityList=  JSON.stringify(data);
                           console.log(data);

                },
                function fail(error) {
                    $log.info(error);
                });
        }
}]);
