'use strict';


controller.controller('View1Ctrl', ['$scope','$log','$interval','$location','$state','activityListService',function($scope,$log,$interval,$location,$state,activityListService) {
    $scope.startcity="上海";
    $scope.startTime=new Date();
    $scope.days="2";
    $scope.costfee="100-500";
    $scope.activityList=[];
    $scope.status=true;
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
    };
    $scope.showActivityList=function(){
       var promise= activityListService.getActivityList($scope.params);

        promise.then(function success(data) {
                $scope.status=false;
                $log.info(data);
                $scope.activityList=  JSON.stringify(data);
                $scope.redirectToList();
            },
            function error(error) {
                console.error(error);
             })
      };

        $scope.redirectToList = function () {
            $location.path("index/activityList/"+$scope.startcity);

           console.log($state.params);
        }
}]);