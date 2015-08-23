'use strict';


controller.controller('View1Ctrl',['$scope',"$log","$location","activityListService",function($scope,$log,$location,activityListService) {
    $scope.startcity="上海";
    $scope.startTime="2015-12-07";
    $scope.days="2";
    $scope.costfee="100-500";
    $scope.activityList=[];
    $scope.actvityItem={
        activityTitle:"",
        actvityDate:"2015-12-07",
        activtyStartCity:"上海",
        activityDays:2,
        actvityId:"",
        costfee:"",
        activityResume:"",
        activityHeaderImgUrl:""
    };


    $scope.showActivityList=function(){
        $scope.redirectToList();
      };
        $scope.redirectToList = function () {
            $location.path("index/activityList/"+$scope.startcity+"/"+$scope.startTime+"/"+$scope.days+"/"+$scope.costfee);
        }
}]);