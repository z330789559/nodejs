'use strict';




controller.controller('View1Ctrl', ['$scope','$log','activityListService',function($scope,$log,activityListService) {
    $scope.startcity="上海";
    $scope.startTime=new Date();
    $scope.days="2";
    $scope.costfee="100-500";
    $scope.activityList=[];
    $scope.actvityItem={
        activityTitle:"",
        actvityDate:new Date(),
        activtyStartCity:"上海",
        activityDays:2,
        actvityId:"",
        costfee:"",
        activityResume:"",
        activityHeaderImgUrl:""
    };
    $scope.params={
        startcity:$scope.startcity,
        startTime: $scope.startTime,
        days: $scope.days,
        costfee:$scope.costfee
    }
    $scope.showActivityList=function(){
       var promise= activityListService.getActivityList($scope.params);
        promise.then(function success(data) {
                $log.info(data);
                $scope.activityList=  JSON.stringify(data);
            },
            function error(error) {
                console.error(error);
            })
    }
}]);